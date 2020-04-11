<template>
  <div>
    <template v-if="!viewStage">
      <div class="mb-5">
        <h3 class="gs-app-layout-heading">
          ADD NEW CATEGORY
        </h3>
      </div>
      <el-row>
        <el-col :span="22">
          <el-form
            ref="updateForm"
            :model="category"
            label-width="200px"
            label-position="top"
            class="gs-form"
          >
            <el-card class="mb-4">
              <el-row :gutter="20" type="flex" class="flex-wrap ">
                <el-col
                  :span="24"
                  class="d-flex justify-content-end align-items-center mb-4"
                >
                  <el-switch v-model="category.status"></el-switch>
                </el-col>
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
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.slug"
                    class="gs-form-item--auth"
                    label="Slug"
                    prop="slug"
                  >
                    <el-input
                      v-model="category.slug"
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.price"
                    class="gs-form-item--auth"
                    label="Price ($)"
                    prop="price"
                  >
                    <el-input
                      v-model="category.price"
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card class="gs-stages-card">
              <template v-if="category.stages.length === 0">
                <div
                  class="my-3 d-flex justify-content-center align-items-center"
                >
                  <div class="gs-add-stage" @click="addStage = true">
                    <i class="gs-icon--plus"></i>
                  </div>
                  <p class="mb-0 ml-2">Add New Stage</p>
                </div>
              </template>
              <template v-else>
                <el-row type="flex" class="flex-wrap" :gutter="30">
                  <el-col
                    v-for="(stage, index) in category.stages"
                    :key="index"
                    :lg="8"
                  >
                    <div class="gs-category-stage">
                      <div>
                        <h5>{{ stage.name }}</h5>
                        <p>{{ stage.questions.length }} Questions</p>
                      </div>
                      <div class="d-flex">
                        <el-button
                          type="primary"
                          size="mini"
                          @click="showStage(stage)"
                          >View</el-button
                        >
                      </div>
                    </div>
                  </el-col>
                  <el-col :lg="2">
                    <div
                      class="h-100 d-flex justify-content-center align-items-center"
                    >
                      <div class="gs-add-stage" @click="addStage = true">
                        <i class="gs-icon--plus"></i>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </el-card>
            <el-form-item class="d-flex justify-content-center mt-4">
              <el-button
                :loading="addingCategory"
                type="primary"
                class="px-5"
                @click="addNewCategory"
                >Add New Category</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </template>
    <template v-else>
      <div class="mb-5">
        <h3 class="gs-app-layout-heading">
          ADD NEW CATEGORY / STAGE
        </h3>
      </div>
      <view-stage
        :show.sync="viewStage"
        :stage-properties="stageProperties"
      ></view-stage>
    </template>
    <add-stage
      :show.sync="addStage"
      :stage-properties.sync="stageProperties"
    ></add-stage>
  </div>
</template>

<script>
import ViewStage from '~/components/Stage/ViewStage'
import AddStage from '~/components/Stage/AddStage'

export default {
  name: 'AdminCategories',
  layout: 'admin',
  components: {
    AddStage,
    ViewStage
  },
  data() {
    return {
      addStage: false,
      addingCategory: false,
      activeStage: '0',
      category: {
        status: false,
        title: '',
        slug: '',
        price: '',
        stages: []
      },
      stageProperties: {},
      loadingHeaders: false,
      showQuestions: false,
      viewStage: false
    }
  },
  watch: {
    stageProperties() {
      if (this.stageProperties !== '') {
        this.category.stages.push(this.stageProperties)
      }
    }
  },
  methods: {
    addNewCategory() {
      //
    },
    showStage(stage) {
      this.stageProperties = stage
      this.viewStage = true
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

.el-menu {
  height: 100%;
  background: #ffffff;
  border-right: 2px solid #4d00d270;
  padding-right: 15px;

  .el-menu-item {
    border-radius: 5px;
    opacity: 0.5;
    margin-bottom: 5px;
    position: relative;

    .remove-button {
      position: absolute;
      right: 0;
      height: 100%;
      top: 50%;
      width: 50px;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 5;
    }

    i {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: 500;
      visibility: hidden;
      transition: visibility 0.2s ease-out;
    }

    &:hover i {
      visibility: visible;
      transition: visibility 0.2s ease-in;
    }

    &.is-active {
      opacity: 1;
      background: #4d00d215;
      color: #4d00d2;
      transition: all 0.2s ease-in;
    }
  }
}

.gs-category-stage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 25px;
  background: #4d00d215;
  border-radius: 10px;

  h5 {
    color: #4d00d2;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1rem;
  }

  p {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 12px;
  }
}

.gs-add-stage {
  background: #4d00d2;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i {
    color: #fff;
    font-size: 0.8rem;
  }
}

.gs-form {
  opacity: 1;
  animation: fade 0.8s linear;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
