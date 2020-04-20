import Cookies from 'js-cookie'
import auth from '../controllers/auth'
import $axios from '../plugins/axios'

export const state = () => ({
  token: Cookies.get('gamesoft-token') || null,
  authenticated: false,
  user: {}
})

export const getters = {
  token: (state) => state.token,
  authenticated: (state) => state.authenticated,
  user: (state) => state.user
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
  }
}

export const actions = {
  LOGIN({ commit }, data) {
    return new Promise((resolve, reject) => {
      auth
        .login(data)
        .then((response) => {
          const res = response.data.response
          const token = response.headers['x-auth-token']
          console.log(res)
          if (!res.error) {
            $axios.defaults.headers.common['x-auth-token'] = token
            commit('USER', res.data)
            commit('TOKEN', token)
            commit('AUTHENTICATED', true)
            Cookies.set('gamesoft-token', token)
            Cookies.set('gamesoft-state', this.state)
          }
          resolve(response.data)
        })
        .catch((error) => {
          Cookies.remove('gamesoft-token')
          Cookies.remove('gamesoft-state')
          reject(error)
        })
    })
  },

  LOGOUT({ commit }) {
    return new Promise((resolve) => {
      Cookies.remove('gamesoft-token')
      Cookies.remove('gamesoft-state')
      delete $axios.defaults.headers.common['x-auth-token']
      commit('TOKEN', '')
      commit('AUTHENTICATED', false)
      resolve({ status: 'success' })
    })
  }
}
