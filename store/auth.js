export const state = () => ({
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: null,
  user: null,
})
export const mutationTypes = {
  loginStart: 'mutation/loginStart',
  loginSuccess: 'mutation/loginSuccess',
  loginFailure: 'mutation/loginFailure',
}
export const actionTypes = {
  login: 'action/logindsfdsfdsfdsf ',
  loadCategory: 'action/categoryStart get all category',
}
export const mutations = {
  [mutationTypes.loginStart](state){
    state.isLoading = true;
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
}
export const actions = {
  [actionTypes.login]({ commit }, userData) {

    commit(mutationTypes.loginFailure, null)

    return new Promise((resolve) => {
      this.$api
        .post('/login', userData)
        .then((response) => {
          if (response?.data?.token !== '') {
            commit(mutationTypes.loginSuccess, response.data)
          }
           resolve(response);
        })
        .catch((e) => {
          commit(mutationTypes.loginFailure, e?.response?.data?.message)
        })
    })
  },
}
