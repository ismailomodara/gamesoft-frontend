import Cookies from 'js-cookie'
import auth from '../controllers/auth'

export const state = () => ({
  token: Cookies.get('gamesoft-token') || null,
  authenticated: false,
  admin: '',
  user: ''
})

export const getters = {
  admin: (state) => state.admin,
  user: (state) => state.user,
  authenticated: (state) => state.authenticated
}

export const mutations = {
  TOKEN(state, token) {
    state.token = token
  },
  AUTHENTICATED(state, authenticated) {
    state.authenticated = authenticated
  },
  USER(state, user) {
    state.user = user
  },
  ADMIN(state, admin) {
    state.admin = admin
  }
}

export const actions = {
  LOGIN({ commit }, data) {
    return new Promise((resolve, reject) => {
      auth
        .login(data)
        .then((response) => {
          if (response.data.status === 'success') {
            //
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  REGISTER({ commit }, data) {
    return new Promise((resolve, reject) => {
      auth
        .register(data)
        .then((response) => {
          if (response.data.status === 'success') {
            //
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
