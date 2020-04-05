<template>
  <el-row>
    <el-col :lg="12">
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
            <el-form-item
              v-custom-input="updateForm.currentPassword"
              class="gs-form-item--auth"
              label="Current Password"
              prop="currentPassword"
            >
              <el-input
                v-model="updateForm.currentPassword"
                :type="currentPasswordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    currentPasswordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showCurrentPassword"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item
              v-custom-input="updateForm.newPassword"
              class="gs-form-item--auth"
              label="New Password"
              prop="newPassword"
            >
              <el-input
                v-model="updateForm.newPassword"
                :type="newPasswordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    newPasswordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showNewPassword"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item
              v-custom-input="updateForm.confirmNewPassword"
              class="gs-form-item--auth"
              label="Confirm New Password"
              prop="confirmNewPassword"
            >
              <el-input
                v-model="updateForm.confirmNewPassword"
                :type="confirmNewPasswordFieldType"
                auto-complete="off"
              >
                <i
                  slot="suffix"
                  :class="
                    confirmNewPasswordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showConfirmNewPassword"
                >
                </i>
              </el-input>
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
  name: 'Security',
  data() {
    const newPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter new password'))
      } else {
        if (this.updateForm.confirmNewPassword !== '') {
          this.$refs.resetPasswordForm.validateField('confirmNewPassword')
        }
        callback()
      }
    }
    const confirmNewPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please confirm your new password'))
      } else if (value !== this.updateForm.newPassword) {
        callback(new Error("Passwords don't match"))
      } else {
        callback()
      }
    }
    return {
      updating: false,
      updateForm: {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      rules: {
        currentPassword: [
          {
            required: true,
            message: "Password field can't be blank.",
            trigger: 'change'
          }
        ],
        newPassword: [{ validator: newPassword, trigger: 'blur' }],
        confirmNewPassword: [{ validator: confirmNewPassword, trigger: 'blur' }]
      },
      currentPasswordFieldType: 'password',
      newPasswordFieldType: 'password',
      confirmNewPasswordFieldType: 'password'
    }
  },
  methods: {
    showCurrentPassword() {
      this.currentPasswordFieldType =
        this.currentPasswordFieldType === 'password' ? 'text' : 'password'
    },
    showNewPassword() {
      this.newPasswordFieldType =
        this.newPasswordFieldType === 'password' ? 'text' : 'password'
    },
    showConfirmNewPassword() {
      this.confirmNewPasswordFieldType =
        this.confirmNewPasswordFieldType === 'password' ? 'text' : 'password'
    },
    update() {
      //
    }
  }
}
</script>
