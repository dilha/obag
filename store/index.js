
export const state = () => ({
  news: [],
  category: [],
  subcategory: [],
  recomended: [],
  error: null,
  isLoading: false,
})

export const mutationTypes = {
  loadNewsSuccess: "mutation/newsSuccess load news success",
  loadCategorySuccess: 'mutation/CategorySuccess load category success"',
  loadSubcategorySuccess: 'mutation/SubcategorySuccess load subcategory success',
  loadRecomendedSuccess: 'mutation/RecomendedSuccess load recomended success"',
  loadRecomendedFailure: 'mutation/RecomendedFailure load recomended success"',
}
export const actionTypes = {
  loadNews: 'action/newsStart get all news',
  loadCategory: 'action/categoryStart get all category',
  loadSubcategory: 'action/categoryStart get subcategory',
  loadRecomended: 'action/recomendedStart get all recomended',
}

export const mutations = {
  [mutationTypes.loadNewsSuccess](state, payload) {
    state.news = payload;
  },
  [mutationTypes.loadCategorySuccess](state, payload) {
    state.category = payload;
  },
  [mutationTypes.loadSubcategorySuccess](state, payload) {
    state.subcategory = payload;
  },
  [mutationTypes.loadRecomendedSuccess](state, payload) {
    state.recomended = payload;
  },
  [mutationTypes.loadRecomendedFailure](state, payload) {
    state.error = payload;
  },


}
export const actions = {
  [actionTypes.loadNews]({ commit }) {
    return new Promise(resolve => {
      this.$api
        .get('/page/get-news')
        .then((response) => {
          const news = response.data.news;
          commit(mutationTypes.loadNewsSuccess, news)
          resolve(news);
        })
    })
  },

  [actionTypes.loadCategory]({ commit }, id) {
    return new Promise(resolve => {
      this.$api
        .get(`/category/${id}`)
        .then((response) => {
          const category = response.data.category;
          commit(mutationTypes.loadCategorySuccess, category)
          resolve(category);
        })
    })
  },

  [actionTypes.loadSubcategory]({ commit }, id) {
    return new Promise(resolve => {
      this.$api
        .get(`/subcategory/${id}`)
        .then((response) => {
          const subcategory = response.data;
          console.log(subcategory)
          commit(mutationTypes.loadSubcategorySuccess, subcategory)
          resolve(subcategory);
        })
    })
  },

  [actionTypes.loadRecomended]({ commit }) {
    return new Promise(resolve => {
      this.$api
        .post('/recomended-products')
        .then((response) => {
          const recomended = response.data?.recomendedProducts || [];
          commit(mutationTypes.loadRecomendedSuccess, recomended)
          resolve(recomended);
        })
        .catch((error) => {
          commit(mutationTypes.loadRecomendedFailure, error)
        })
    })
  },



}

export const getters = {
  likesProducts: (state) => state.category?.products?.length ? state.category.products.slice(0, 4) : [],
  blockNews: (state) => state.news?.length ? state.news.slice(0, 4) : []
}
