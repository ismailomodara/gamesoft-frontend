import $axios from '../plugins/axios'

export default {
  async adminLogin(data) {
    return await $axios.post('/admin/login', {
      email: data.email,
      password: data.password
    })
  },

  login(data) {
    return $axios.post('/user/login', {
      email: data.email,
      password: data.password
    })
  },

  register(data) {
    return $axios.post('/user/register', {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      gender: data.gender,
      role: data.role
    })
  },

  verify(token) {
    return $axios.get(`/user/verify?token=${token}`)
  },

  sendVerificationMail(email) {
    return this.$axios.get(`/user/sendVerification?email=${email}`)
  },

  sendRecoveryMail(email) {
    return this.$axios.get(`/user/sendRecoveryMail?email=${email}`)
  },

  resetPassword(data) {
    return this.$axios.patch('/user/resetPassword', {
      token: data.token,
      password: data.password
    })
  }
}
