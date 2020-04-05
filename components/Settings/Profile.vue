<template>
  <el-row type="flex" :gutter="30">
    <el-col :lg="7">
      <el-card>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-card>
    </el-col>
    <el-col :lg="17">
      <el-card>
        <el-form
          ref="updateForm"
          :model="updateForm"
          :rules="rules"
          label-width="200px"
          label-position="top"
          class="gs-form"
        >
          <div class="mb-4">
            <h3 class="gs-app-layout-heading">PERSONAL INFORMATION</h3>
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="updateForm.firstName"
                  class="gs-form-item--auth"
                  label="Firstname"
                  prop="firstName"
                >
                  <el-input
                    v-model="updateForm.firstName"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="updateForm.lastName"
                  class="gs-form-item--auth"
                  label="Lastname"
                  prop="lastName"
                >
                  <el-input
                    v-model="updateForm.lastName"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="updateForm.userName"
                  class="gs-form-item--auth"
                  label="Username"
                  prop="userName"
                >
                  <el-input
                    v-model="updateForm.userName"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="updateForm.email"
                  class="gs-form-item--auth"
                  label="Email"
                  prop="email"
                >
                  <el-input
                    v-model="updateForm.email"
                    disabled
                    type="email"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" class="flex-wrap">
              <el-col :xs="24" :sm="12">
                <el-form-item
                  v-custom-input="updateForm.phoneNumber"
                  class="gs-form-item--auth"
                  label="Phone Number"
                  prop="phoneNumber"
                >
                  <el-input
                    v-model="updateForm.phoneNumber"
                    type="text"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item class="gs-selection" label="Gender" prop="gender">
                  <el-radio v-model="updateForm.gender" label="male" border
                    >Male</el-radio
                  >
                  <el-radio v-model="updateForm.gender" label="female" border
                    >Female</el-radio
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div class="mb-5">
            <h3 class="gs-app-layout-heading">PREFERENCES</h3>
            <el-form-item
              class="gs-selection flex-column align-items-start"
              label="Categories"
            >
              <el-checkbox-group v-model="updateForm.categories">
                <el-checkbox label="Music"></el-checkbox>
                <el-checkbox label="Sports"></el-checkbox>
                <el-checkbox label="IQ Basic"></el-checkbox>
                <el-checkbox label="Health"></el-checkbox>
                <el-checkbox label="Economics"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <el-form-item class="d-flex justify-content-center">
            <el-button
              :loading="updating"
              type="primary"
              class="px-5"
              @click="update"
              >Update</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      imageUrl: '',
      updating: false,
      updateForm: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        categories: []
      },
      rules: {
        firstName: [
          {
            required: true,
            message: 'Field is required',
            trigger: 'change'
          }
        ],
        lastName: [
          {
            required: true,
            message: 'Field is required',
            trigger: 'change'
          }
        ],
        userName: [
          {
            required: true,
            message: 'Choose a username',
            trigger: 'change'
          }
        ],
        email: [
          {
            required: true,
            message: "Email field can't be blank",
            trigger: 'change'
          },
          {
            type: 'email',
            message: "Email isn't valid",
            trigger: ['blur']
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: 'Your phone number please',
            trigger: 'change'
          }
        ],
        gender: [
          {
            required: true,
            message: 'You were born with a genital',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    },
    update() {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
