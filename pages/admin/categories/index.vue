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
    <el-card>
      <el-form class="gs-filters">
        <el-form-item class="gs-form-item--auth" label="" prop="search">
          <el-input
            v-model="searchQuery"
            suffix-icon="gs-icon--search"
            type="text"
            placeholder="Search category"
            :disabled="!allCategoriesFiltered.length"
            @input="filterWithQuery"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-table v-loading="gettingCategories" :data="allCategoriesFiltered">
        <el-table-column label="" width="30"> </el-table-column>
        <el-table-column prop="name" label="Name">
          <template slot-scope="scope">
            <nuxt-link
              :to="{
                name: 'admin-categories-category-edit',
                params: { category: scope.row._id }
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
                params: { category: scope.row._id }
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
    </el-card>
  </div>
</template>

<script>
import admin from '../../../controllers/admin'

export default {
  name: 'AdminCategories',
  layout: 'admin',
  data() {
    return {
      gettingCategories: false,
      searchQuery: '',
      allCategories: this.$store.state.admin.categories || []
    }
  },
  computed: {
    allCategoriesFiltered: {
      get() {
        return this.allCategories
      },
      set(value) {
        this.$emit('update:allCategories', value)
      }
    }
  },
  created() {
    if (!this.$store.state.admin.categories.length) {
      this.getAllCategories()
    }
  },
  methods: {
    filterWithQuery(query = this.searchQuery) {
      const categories = this.$store.state.admin.categories
      if (query !== '') {
        this.allCategories = categories.filter(
          (data) =>
            !query ||
            data.name.toLowerCase().includes(query.toLowerCase()) ||
            data.price.toString().includes(query)
        )
      } else {
        this.allCategories = categories
      }
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
          this.allCategories = this.$store.state.admin.categories
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
</style>
