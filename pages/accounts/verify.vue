<template>
  <div class="gs-auth">
    <div class="gs-auth-container">
      <div v-loading="sendingMail" class="gs-auth-container-content">
        <nuxt-link :to="{ name: 'accounts-login' }">
          <img class="gs-auth-logo" :src="logo" alt />
        </nuxt-link>
        <div class="text-center">
          <h4 class="gs-auth-heading">Verify your account</h4>
          <p>
            A verification link has been sent to <br />
            <strong>{{ email }}</strong>
          </p>
          <p class="small">
            Didn't get mail?
            <span
              class="text-primary"
              :style="{ cursor: 'pointer' }"
              @click="resendVerificationMail"
              >Resend</span
            >
          </p>
          <el-button
            type="primary"
            class="px-5"
            @click="$router.push({ name: 'accounts-login' })"
            >Login</el-button
          >
        </div>
      </div>
      <div class="gs-auth-container-image"></div>
    </div>
  </div>
</template>

<script>
import auth from '~/controllers/auth'

export default {
  name: 'Verify',
  data() {
    return {
      logo: '/logo.svg',
      email: this.$route.params.email || '',
      sendingMail: false
    }
  },
  created() {
    this.verifyAccount()
  },
  methods: {
    verifyAccount() {
      auth
        .verify(this.email)
        .then((response) => {
          const res = response.data
          if (!res.error) {
            this.$message.success('Verification mail sent.')
          }
        })
        .catch((error) => {
          this.$message.error(error.response.data.response.errors.email)
        })
    },
    resendVerificationMail() {
      this.sendingMail = true
      auth
        .verify(this.email)
        .then((response) => {
          const res = response.data
          if (!res.error) {
            this.$message.success('Verification mail resent.')
            this.$router.push({ name: 'accounts-login' })
          }
          this.sendingMail = false
        })
        .catch((error) => {
          this.$message.error(error.response.data.response.errors.email)
          this.sendingMail = false
        })
    }
  }
}
</script>

<style scoped>
.gs-auth-container-content > div {
  width: 90% !important;
}
</style>
