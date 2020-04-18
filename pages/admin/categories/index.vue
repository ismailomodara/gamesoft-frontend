<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-5">
      <h3 class="gs-app-layout-heading">
        ALL CATEGORIES ({{ allCategoriesFiltered.length }})
      </h3>
      <nuxt-link :to="{ name: 'admin-categories-add' }">
        <el-button type="primary" plain>Add New</el-button>
      </nuxt-link>
    </div>
    <div class="gs-all-categories" :loading="gettingCategories">
      <el-form class="gs-filters">
        <el-dropdown @command="filterBy">
          <el-button plain
            >Filter by<i class="gs-icon--chevron-down"></i
          ></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="all">All</el-dropdown-item>
            <el-dropdown-item command="active">Active</el-dropdown-item>
            <el-dropdown-item command="inactive">Inactive</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-form-item class="gs-form-item--auth" label="" prop="search">
          <el-input
            v-model="searchQuery"
            suffix-icon="gs-icon--search"
            type="text"
            placeholder="Search category"
            @input="filterWithQuery"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-table :data="allCategoriesFiltered" style="width: 100%">
        <el-table-column label="" width="30"> </el-table-column>
        <el-table-column prop="name" label="Name">
          <template slot-scope="scope">
            <nuxt-link
              :to="{
                name: 'admin-categories-category-edit',
                params: { category: scope.row.slug, id: scope.row._id }
              }"
              >{{ scope.row.name }}</nuxt-link
            >
          </template>
        </el-table-column>
        <el-table-column prop="price" label="Price"> </el-table-column>
        <el-table-column prop="slug" label="Slug"></el-table-column>
        <el-table-column prop="created" label="Created on">
          <template slot-scope="scope">
            {{ fullDate(scope.row.createdAt) }}
          </template>
        </el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <nuxt-link
              :to="{
                name: 'admin-categories-category-edit',
                params: { category: scope.row.slug, id: scope.row._id }
              }"
              ><el-button size="mini">Edit</el-button></nuxt-link
            >
            <el-button
              size="mini"
              type="danger"
              @click="deleteCategory(scope.row.name, scope.row._id)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import admin from '../../../controllers/admin'

export default {
  name: 'AdminCategories',
  layout: 'admin',
  props: {
    recentActivities: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      gettingCategories: true,
      searchQuery: '',
      allCategoriesFiltered: this.$store.state.admin.categories
    }
  },
  computed: {
    allCategories() {
      return this.$store.state.admin.categories
    }
  },
  created() {
    this.getAllCategories()
  },
  methods: {
    filterWithQuery(query = this.searchQuery) {
      this.allCategoriesFiltered = this.allCategories.filter(
        (data) =>
          !query ||
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.price.toString().includes(query)
      )
    },
    filterBy(command) {
      this.filterWithQuery(command)
    },
    getAllCategories() {
      this.gettingCategories = true
      this.$store
        .dispatch('admin/ALL_CATEGORIES')
        .then(() => {
          this.gettingCategories = false
        })
        .catch((error) => {
          this.$message.error(error.response)
          this.gettingCategories = false
        })
    },
    deleteCategory(name, id) {
      this.$confirm(
        `Are you sure you want to delete this category, ${name}?`,
        'Warning',
        {
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = 'Deleting...'

              setTimeout(() => {
                done()
                setTimeout(() => {
                  instance.confirmButtonLoading = false
                }, 300)
              }, 1500)
            } else {
              done()
            }
          }
        }
      ).then(() => {
        admin
          .deleteCategory(id)
          .then((response) => {
            const res = response.data
            if (!res.error) {
              this.getAllCategories()
              this.$message.success(res.message)
            }
          })
          .catch((error) => {
            this.$message.error(error.response.data.message)
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.gs-all-categories {
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  i {
    font-size: 12px;
    margin-right: 5px;
  }

  a {
    font-weight: 400;
    font-size: 14px;
  }
}

.gs-filters {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;

  .el-form-item {
    margin-bottom: 0;
    height: auto !important;
    width: 300px;
  }

  .el-button {
    margin-right: 10px;
    display: flex;
    align-items: center;

    i {
      margin-left: 5px;
      font-size: 12px;
    }

    &:hover {
      border-color: #7f828b;
      color: #7f828b;
      transform: translateY(0) !important;
      box-shadow: none !important;
    }
  }
}
</style>
