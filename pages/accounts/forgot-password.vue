<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div class="gs-auth-container-content">
        <nuxt-link :to="{ name: 'index' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </nuxt-link>
        <div>
          <h4 class="gs-auth-heading">Recover your password</h4>
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
            <el-form-item class="d-flex justify-content-center">
              <el-button
                :loading="loggingIn"
                type="primary"
                class="px-5"
                @click="sendLink"
                >Send Recovery Mail</el-button
              >
            </el-form-item>
            <p class="text-center">
              Back to
              <strong
                ><nuxt-link :to="{ name: 'accounts-login' }" class="dark-text"
                  >Login</nuxt-link
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
  name: 'ForgotPassword',
  data() {
    return {
      logo: '/logo.svg',
      loggingIn: false,
      passwordFieldType: 'password',
      form: {
        email: ''
      },
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
        ]
      }
    }
  },
  methods: {
    hasValue(label) {
      if (this.form[label] !== '') {
        document.querySelector(`label[for=${label}]`).classList.add('has-value')
      } else {
        document
          .querySelector(`label[for=${label}]`)
          .classList.toggle('has-value')
      }
    },
    sendLink() {
      //
    }
  }
}
</script>
