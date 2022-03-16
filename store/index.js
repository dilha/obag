
export const state = ()=>({
  news:[],
  category: [],
  error:null,
  isLoading:false,
})

export const mutationTypes = {
  loadNewsSuccess:"mutation/newsSuccess load news success",
  loadCategorySuccess:'mutation/CategorySuccess load category success"'
}
export const actionTypes = {
  loadNews:'action/newsStart get all news',
  loadCategory:'action/categoryStart get all category',
}

export const mutations = {
  [mutationTypes.loadNewsSuccess](state, payload){
    state.news = payload;
  },
  [mutationTypes.loadCategorySuccess](state, payload){
    state.category = payload;
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
        console.log(category)
        resolve(category);
      })
    })
  },
 
}

export const getters = {
  likesProducts:(state)=>state.category?.products?.length ? state.category.products.slice(0, 4) : []
}
