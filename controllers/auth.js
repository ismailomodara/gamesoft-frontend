import $axios from '../plugins/axios'

export default {
  login(data) {
    return $axios.post('/user/login', {
      email: data.email,
      password: data.password
    })
  },

  register(data) {
    return $axios.post('/user/register', {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      username: data.userName
    })
  }
}
