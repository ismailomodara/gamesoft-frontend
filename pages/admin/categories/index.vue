<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-5">
      <h3 class="gs-app-layout-heading">
        ALL CATEGORIES ({{ allCategoriesFiltered.length }})
      </h3>
      <el-button type="primary" plain>Add New</el-button>
    </div>
    <div class="gs-all-categories">
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
            type="text"
            suffix-icon="gs-icon--search"
            placeholder="Search category"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-table :data="allCategoriesFiltered" style="width: 100%">
        <el-table-column label="" width="30"> </el-table-column>
        <el-table-column prop="title" label="Title"> </el-table-column>
        <el-table-column prop="stages" label="Stages"> </el-table-column>
        <el-table-column prop="total_questions" label="Questions">
        </el-table-column>
        <el-table-column prop="total_points" label="Points"> </el-table-column>
        <el-table-column prop="reward" label="Reward"> </el-table-column>
        <el-table-column prop="created" label="Created on"> </el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <el-button size="mini" @click="editCategory(scope.row.id)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="deleteCategory(scope.row.id)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
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
      searchQuery: '',
      allCategories: [
        {
          id: 1,
          title: 'Music',
          stages: 3,
          total_questions: 80,
          total_points: 400,
          reward: '$15.00',
          created: '4th April, 2020',
          status: 'active'
        },
        {
          id: 2,
          title: 'Sports',
          stages: 4,
          total_questions: 60,
          total_points: 200,
          reward: '$15.00',
          created: '4th April, 2020',
          status: 'active'
        },
        {
          id: 3,
          title: 'IQ Basic',
          stages: 3,
          total_questions: 70,
          total_points: 300,
          reward: '$15.00',
          created: '4th April, 2020',
          status: 'active'
        },
        {
          id: 4,
          title: 'Health',
          stages: 3,
          total_questions: 70,
          total_points: 300,
          reward: '$15.00',
          created: '4th April, 2020',
          status: 'inactive'
        }
      ]
    }
  },
  computed: {
    allCategoriesFiltered() {
      return this.filterWithQuery()
    }
  },
  methods: {
    filterWithQuery(query = this.searchQuery) {
      return this.allCategories.filter(
        (data) =>
          !query ||
          data.title.toLowerCase().includes(query.toLowerCase()) ||
          data.stages.includes(query) ||
          data.total_questions.includes(query) ||
          data.total_points.includes(query) ||
          data.status.toLowerCase().includes(query.toLowerCase())
      )
    },
    filterBy(command) {
      this.filterWithQuery(command)
    },
    editCategory(id) {
      //
    },
    deleteCategory(id) {
      //
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
    font-weight: 600;
    font-size: 12px;
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
