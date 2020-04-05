<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-5">
      <h3 class="gs-app-layout-heading">
        ADD NEW CATEGORY
      </h3>
    </div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-form
            ref="updateForm"
            :model="category"
            :rules="rules"
            label-width="200px"
            label-position="top"
            class="gs-form"
          >
            <div class="mb-4">
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <h3 class="gs-app-layout-heading">OVERVIEW</h3>
                <div class="d-flex align-items-center">
                  <h6 class="mr-2">STATUS</h6>
                  <el-switch v-model="category.status"></el-switch>
                </div>
              </div>
              <el-row :gutter="20" type="flex" class="flex-wrap">
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.title"
                    class="gs-form-item--auth"
                    label="Category Title"
                    prop="title"
                  >
                    <el-input
                      v-model="category.title"
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="mb-5">
              <h3 class="gs-app-layout-heading">STAGES</h3>
            </div>
            <el-form-item class="d-flex justify-content-center">
              <el-button
                :loading="addingCategory"
                type="primary"
                class="px-5"
                @click="addNewCategory"
                >Add</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
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
      addingCategory: false,
      category: {
        title: 'Tunji',
        number_of_stages: '',
        total_points: '',
        reward: '',
        total_questions: '',
        status: false,
        stages: []
      },
      rules: {}
    }
  },
  computed: {
    allCategoriesFiltered() {
      return this.filterWithQuery()
    }
  },
  methods: {
    addNewCategory() {
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
