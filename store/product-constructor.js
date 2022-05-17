export const state = () => ({
  productType: [],
  productCategory: [],
  error: null,
  isLoading: false,
})

export const mutationTypes = {
  loadCategorySuccess: "mutation/categorySuccess load constructor success",
  loadTypeSuccess: "mutation/typeSuccess load type success",
}
export const actionTypes = {
  loadCategory: 'action/loadCategory get all constructor',
  loadType: 'action/loadType get all elements',
}

export const mutations = {
  [mutationTypes.loadCategorySuccess](state, payload) {
    state.productCategory = payload;
  },

  [mutationTypes.loadTypeSuccess](state, payload) {
    state.productType = payload;
  },
}
export const actions = {
  [actionTypes.loadCategory]({ commit }, id) {
    return new Promise(resolve => {
      this.$api
        .get(`/constructor/${id}`)
        .then((response) => {
          const productCategory = response.data;
          commit(mutationTypes.loadCategorySuccess, productCategory)
          resolve(productCategory);
        })
    })
  },

  [actionTypes.loadType]({ commit }) {
    return new Promise(resolve => {
      this.$api
        .get('/constructor')
        .then((response) => {
          const productType = response.data;
          commit(mutationTypes.loadTypeSuccess, productType)
          resolve(productType);
        })
    })
  },
}

export const getters = {

}