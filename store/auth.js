import auth from '../controllers/auth'

export const state = () => ({
  token: '',
  authenticated: true,
  user: ''
})

export const getters = {
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
