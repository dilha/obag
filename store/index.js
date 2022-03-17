
export const state = ()=>({
  news:[],
  category: [],
  recomended: [],
  error:null,
  isLoading:false,
})

export const mutationTypes = {
  loadNewsSuccess:"mutation/newsSuccess load news success",
  loadCategorySuccess:'mutation/CategorySuccess load category success"',
  loadRecomendedSuccess:'mutation/RecomendedSuccess load recomended success"'
}
export const actionTypes = {
  loadNews:'action/newsStart get all news',
  loadCategory:'action/categoryStart get all category',
  loadRecomended:'action/recomendedStart get all recomended',
}

export const mutations = {
  [mutationTypes.loadNewsSuccess](state, payload){
    state.news = payload;
  },
  [mutationTypes.loadCategorySuccess](state, payload){
    state.category = payload;
  },
  [mutationTypes.loadRecomendedSuccess](state, payload){
    state.recomended = payload;
  },
 
}
export const actions = {
  [actionTypes.loadNews]({commit}){
    return new Promise(resolve => {
      this.$api
      .get('/page/get-news')
      .then((response)=>{
        const news = response.data.news;
        commit(mutationTypes.loadNewsSuccess, news )
        resolve(news);
      })
    })
  },

  [actionTypes.loadCategory]({commit}, id){
    return new Promise(resolve => {
      this.$api
      .get(`/category/${id}`)
      .then((response)=>{
        const category = response.data.category;
        commit(mutationTypes.loadCategorySuccess, category )
        resolve(category);
      })
    })
  },
 
  [actionTypes.loadRecomended]({commit}){
    return new Promise(resolve => {
      this.$api
      .post('/recomended-products')
      .then((response)=>{
        const recomended = response.data.recomendedProducts;
        commit(mutationTypes.loadRecomendedSuccess, recomended )
        resolve(recomended);
      })
    })
  },

}

export const getters = {
  likesProducts:(state)=>state.category?.products?.length ? state.category.products.slice(0, 4) : [],
  blockNews:(state)=>state.news?.length ? state.news.slice(0, 4) : []
}
