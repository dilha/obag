export const state = () => ({
  certificates: [],
  error: null,
  isLoading: false,
})

export const mutationTypes = {
  loadCertificatesSuccess:
    'mutation/certificatesSuccess load certificates success',
}
export const actionTypes = {
  loadCertificates: 'action/loadCertificates get all certificates',
}

export const mutations = {
  [mutationTypes.loadCertificatesSuccess](state, payload) {
    state.certificates = payload
  },
}
export const actions = {
  [actionTypes.loadCertificates]({ commit }) {
    return new Promise((resolve) => {
      this.$api
        .get('/page/gift-certificates')
        .then((response) => {
          const certificates = response.data
          commit(mutationTypes.loadCertificatesSuccess, certificates)
          resolve(certificates)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
}

export const getters = {}
