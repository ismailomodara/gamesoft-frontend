<template>
  <div>
    <template>
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
                    v-custom-input="category.name"
                    class="gs-form-item--auth"
                    label="Category Title"
                    prop="title"
                  >
                    <el-input
                      v-model="category.name"
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.name"
                    class="gs-form-item--auth"
                    label="Slug"
                    prop="slug"
                  >
                    <el-input
                      v-model="slug"
                      disabled
                      type="text"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item
                    v-custom-input="category.price"
                    v-only-number
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
              <el-form-item
                v-if="!category.id"
                class="d-flex justify-content-center mt-4"
              >
                <el-button
                  :loading="addingCategory"
                  type="primary"
                  class="px-5"
                  @click="addCategory"
                  >Add Category</el-button
                >
              </el-form-item>
            </el-card>
          </el-form>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
import admin from '../../../controllers/admin'

export default {
  name: 'AdminCategories',
  layout: 'admin',
  components: {},
  data() {
    return {
      addingCategory: false,
      category: {
        id: '',
        status: false,
        name: '',
        price: ''
      }
    }
  },
  computed: {
    slug() {
      return this.category.name
        .toLowerCase()
        .split(' ')
        .join('-')
    }
  },
  methods: {
    addCategory() {
      this.addingCategory = true
      admin
        .addCategory(this.category)
        .then((response) => {
          const res = response.data
          if (!res.error) {
            this.category.id = res.response.data._id
            this.$message.success(res.message)
            setTimeout(() => {
              this.$router.push({
                name: 'admin-categories-category-edit',
                params: {
                  category: res.response.data.slug,
                  id: this.category.id
                }
              })
            }, 500)
          }
          this.addingCategory = false
        })
        .catch((error) => {
          this.$message.error(error.response.data.response.error.category)
          this.addingCategory = false
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
    font-size: 1rem;
    cursor: pointer;
  }

  p {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 12px;
  }

  .gs-category-stage-action {
    display: flex;

    .el-button {
      padding: 10px;

      i {
        font-size: 12px;
      }
    }
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
