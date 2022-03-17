export const state = ()=>({
  isLoading:false,
  error:null,
  data:null,
})
export const mutationTypes = {
  loadOrderStart:'mutation/loadOrderStart',
  loadOrderSuccess:'mutation/loadOrderSuccess',
  loadOrderFailure:'mutation/loadOrderFailure',
}
export const actionTypes = {
  loadOrders:'action/loadOrders'
}
export const mutations = {
  [mutationTypes.loadOrderStart](state){
    state.isLoading = true;
  },
  [mutationTypes.loadOrderSuccess](state, payload){
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.loadOrderFailure](state){
    state.isLoading = false;
  },
}
export const actions = {
  [actionTypes.loadOrders]({commit}){
    commit(mutationTypes.loadOrderStart);

    return new Promise(resolve =>{
      this.$api
      .get('/user/history')
      .then(response=>{
        console.log(response)
        commit(mutationTypes.loadOrderSuccess, response?.data?.carts)
        resolve(response)
      })
    })
  }
}
