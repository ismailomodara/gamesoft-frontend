import Cookies from 'js-cookie'
import admin from '../controllers/admin'
import $axios from '../plugins/axios'

export const state = () => ({
  token: Cookies.get('gamesoft-token') || null,
  authenticated: false,
  admin: {},
  categories: []
})

export const getters = {
  token: (state) => state.token,
  authenticated: (state) => state.authenticated,
  admin: (state) => state.admin,
  categories: (state) => state.categories
}

export const mutations = {
  TOKEN(state, token) {
    state.token = token
  },
  AUTHENTICATED(state, authenticated) {
    state.authenticated = authenticated
  },
  ADMIN(state, admin) {
    state.admin = admin
  },
  CATEGORIES(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  LOGIN({ commit }, data) {
    return new Promise((resolve, reject) => {
      admin
        .login(data)
        .then((response) => {
          const res = response.data.response
          const token = response.headers['x-auth-token']
          if (response.status === 200) {
            $axios.defaults.headers.common['x-auth-token'] = token
            commit('ADMIN', res.data)
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
      commit('ADMIN', {})
      commit('TOKEN', '')
      commit('AUTHENTICATED', false)
      commit('CATEGORIES', [])
      resolve({ status: 'success' })
    })
  },

  ALL_CATEGORIES({ commit }, data) {
    return new Promise((resolve, reject) => {
      admin
        .getCategories()
        .then((response) => {
          if (response.data.code === 200) {
            commit('CATEGORIES', response.data.response.data)
            Cookies.set('gamesoft-state', this.state)
          }
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
