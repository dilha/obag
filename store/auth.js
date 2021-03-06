export const state = () => ({
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: null,
  user: null,
  googleAccount: null,
})
export const mutationTypes = {
  setIsLoggedIn: 'mutation/setIsLoggedIn',

  loginStart: 'mutation/loginStart',
  loginSuccess: 'mutation/loginSuccess',
  loginFailure: 'mutation/loginFailure',

  registerSuccess: 'mutation/registerSuccess',
  registerFailure: 'mutation/registerFailure',
  registerStart: 'mutation/registerStart',

  logoutStart: 'mutation/logoutStart',
  logoutSuccess: 'mutation/logoutSuccess',
  logoutFailure: 'mutation/logoutFailure',

  editMutation: 'mutation/editStart',

  googleStart: 'mutation/googleStart',
  googleSuccess: 'mutation/googleSuccess',
  googleFailure: 'mutation/googleFailure',
}
export const actionTypes = {
  login: 'action/loginAction ',
  register: 'actions/register',
  logout: 'action/logoutAction ',
  updateIsLoggedIn: 'action/categoryStart',
  editAction: 'action/editAction',
  googleAction: 'action/googleAction',
  googleLogin: 'action/googleLogin',
}
export const mutations = {
  [mutationTypes.editMutation](state, payload) {
    state.user = payload
  },

  [mutationTypes.setIsLoggedIn](state, payload) {
    state.isLoggedIn = payload
  },

  [mutationTypes.loginStart](state) {
    state.isLoading = true
  },

  [mutationTypes.loginSuccess](state, payload) {
    state.isLoggedIn = true
    state.token = payload.token
    state.user = payload.user
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isLoggedIn = false
    state.error = payload
  },

  [mutationTypes.googleStart](state) {
    state.isLoading = true
  },

  [mutationTypes.googleSuccess](state, payload) {
    state.googleAccount = payload
    // state.isLoggedIn = true;
    // state.token = payload.token
    // state.user = payload.user
  },
  [mutationTypes.googleFailure](state, payload) {
    state.isLoggedIn = false
    state.error = payload
  },

  [mutationTypes.registerStart](state) {
    state.isLoading = true
  },

  [mutationTypes.registerSuccess](state, payload) {
    state.isLoggedIn = true
    state.token = payload.token
    state.user = payload.user
  },
  [mutationTypes.registerFailure](state, payload) {
    state.isLoggedIn = false
    state.error = payload
  },

  [mutationTypes.logoutStart](state) {
    state.isLoading = true
  },

  [mutationTypes.logoutSuccess](state) {
    state.isLoggedIn = false
    state.token = null
    state.user = null
  },
  [mutationTypes.logoutFailure](state, payload) {
    state.isLoggedIn = false
    state.error = payload
  },
}

export const actions = {
  [actionTypes.login]({ commit }, userData) {
    commit(mutationTypes.loginFailure, null)

    return new Promise((resolve) => {
      this.$api
        .post('/login', userData)
        .then((response) => {
          if (response?.data?.token !== '' && response.statue !== 401) {
            commit(mutationTypes.loginSuccess, response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
          }
          resolve(response)
        })
        .catch((e) => {
          commit(mutationTypes.loginFailure, e?.response?.data?.message)
        })
    })
  },
  [actionTypes.googleLogin]({ commit }, userData) {
    commit(mutationTypes.loginSuccess, userData)
    localStorage.setItem('token', userData.token)
    localStorage.setItem('user', JSON.stringify(userData.user))
  },
  [actionTypes.googleAction]({ commit }, userData) {
    commit(mutationTypes.googleFailure, null)
    return new Promise((resolve) => {
      this.$api
        .get('/google-register', userData)
        .then((response) => {
          const url = response.data.url
          commit(mutationTypes.googleSuccess, url)
          // console.log(url)
          if (response?.data?.token !== '' && response.statue !== 401) {
            localStorage.setItem('token', this.$route.query.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            this.$router.push('/account')
          }
          resolve(url)
        })
        .catch((e) => {
          commit(mutationTypes.googleFailure, e?.response?.data?.message)
        })
    })
  },

  [actionTypes.register]({ commit }, userData) {
    commit(mutationTypes.registerStart)
    commit(mutationTypes.registerFailure, null)

    return new Promise((resolve) => {
      this.$api
        .post('/register', userData)
        .then((response) => {
          if (response?.data?.token !== '') {
            commit(mutationTypes.registerSuccess, response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            this.$router.push('/account')
          }
          resolve(response)
        })
        .catch((e) => {
          commit(mutationTypes.registerFailure, e?.response?.data)
        })
    })
  },
  [actionTypes.logout]({ commit }) {
    commit(mutationTypes.logoutFailure, null)

    return new Promise((resolve) => {
      this.$api
        .post('/logout')
        .then((response) => {
          // ?????????????? ???????????????? ???? 200 ????????????

          commit(mutationTypes.logoutSuccess)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          this.$router.push('/')

          resolve(response)
        })
        .catch((e) => {
          commit(mutationTypes.logoutSuccess)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          this.$router.push('/')
          commit(mutationTypes.logoutFailure, e?.response?.data?.message)
        })
    })
  },
  [actionTypes.updateIsLoggedIn]({ commit }) {
    const token = localStorage.key('token')
      ? localStorage.getItem('token')
      : null
    const user = localStorage.key('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null

    if (token) {
      commit(mutationTypes.loginSuccess, { token, user })
      return
    }
    commit(mutationTypes.setIsLoggedIn, false)
  },
}
