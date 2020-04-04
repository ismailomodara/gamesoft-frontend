<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div class="gs-auth-container-content">
        <nuxt-link :to="{ name: 'index' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </nuxt-link>
        <div>
          <h4 class="gs-auth-heading">Welcome back! Please login</h4>
          <el-alert
            v-if="loginError"
            class="mb-3"
            title="Invalid email/password"
            type="error"
          >
          </el-alert>
          <el-form
            ref="loginForm"
            :model="form"
            :rules="rules"
            label-width="200px"
            label-position="top"
            class="gs-form"
          >
            <el-form-item class="gs-form-item--auth" label="Email" prop="email">
              <el-input
                v-model="form.email"
                type="text"
                auto-complete="off"
                @focus="hasValue('email')"
                @blur="hasValue('email')"
              ></el-input>
            </el-form-item>
            <el-form-item
              class="gs-form-item--auth"
              label="Password"
              prop="password"
            >
              <el-input
                v-model="form.password"
                :type="passwordFieldType"
                auto-complete="off"
                @focus="hasValue('password')"
                @blur="hasValue('password')"
              >
                <i
                  slot="suffix"
                  :class="
                    passwordFieldType === 'password'
                      ? 'gs-icon--eye'
                      : 'gs-icon--eye-off'
                  "
                  @click="showPassword"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item class="gs-auth-actions">
              <div>
                <el-checkbox v-model="rememberMe" class="rememberMe"
                  >Remember me</el-checkbox
                >
                <nuxt-link :to="{ name: 'accounts-forgot-password' }"
                  >Forgot password?</nuxt-link
                >
              </div>
            </el-form-item>
            <el-form-item class="d-flex justify-content-center">
              <el-button
                :loading="loggingIn"
                type="primary"
                class="px-5"
                @click="login"
                >Login</el-button
              >
            </el-form-item>
            <p class="text-center">
              New user?
              <strong
                ><nuxt-link
                  :to="{ name: 'accounts-register' }"
                  class="dark-text"
                  >Start earning</nuxt-link
                ></strong
              >
            </p>
          </el-form>
        </div>
      </div>
      <div class="gs-auth-container-image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      logo: '/logo.svg',
      loggingIn: false,
      loginError: false,
      passwordFieldType: 'password',
      form: {
        email: '',
        password: ''
      },
      rememberMe: '',
      rules: {
        email: [
          {
            required: true,
            message: 'Please enter email address',
            trigger: 'change'
          },
          {
            type: 'email',
            message: 'Invalid email',
            trigger: ['blur']
          }
        ],
        password: [
          {
            required: true,
            message: "Password field can't be blank.",
            trigger: 'change'
          }
        ]
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler() {
        this.loginError = false
      }
    }
  },
  methods: {
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    hasValue(label) {
      if (this.form[label] !== '') {
        document.querySelector(`label[for=${label}]`).classList.add('has-value')
      } else {
        document
          .querySelector(`label[for=${label}]`)
          .classList.toggle('has-value')
      }
    },
    dummyLogin() {
      this.$router.push({ name: 'app-dashboard' })
    },
    login() {
      this.loggingIn = true
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (
            this.form.email !== 'moshood@alaran.com' ||
            this.form.password !== 'moshood'
          ) {
            this.loginError = true
            this.loggingIn = false
          } else {
            setTimeout(() => {
              this.$router.push({ name: 'app-dashboard' })
              this.$message.success('Login successful')
              this.loggingIn = false
            }, 2000)
          }
        } else {
          this.loggingIn = false
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.gs-auth-actions .el-form-item__content {
  line-height: 0;

  label {
    margin-bottom: 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .gs-auth {
    height: 100vh;
  }
}
</style>
