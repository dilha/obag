export const state = ()=>({
  isLoading:false,
  error:null,
  data:null,
})
export const mutationTypes = {
  sendOrderStart:'mutation/sendOrderStart',
  sendOrderSuccess:'mutation/sendOrderSuccess',
  sendOrderFailure:'mutation/sendOrderStart',
}
export const actionTypes = {
  sendOrder:'action/sendOrder'
}
export const mutations = {
  [mutationTypes.sendOrderStart](state){
    state.isLoading = true;
  },
  [mutationTypes.sendOrderSuccess](state, payload){
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.sendOrderFailure](state, payload){
    state.isLoading = false;
    state.error = payload;
  },
}
export const actions = {
  [actionTypes.sendOrder]({commit, rootState}, payload){

    return new Promise(resolve =>{
      this.$api
      .post('/cart/store', payload)
      .then(response=>{
        console.log(response)
        if(response.status === 200){
          commit(mutationTypes.sendOrderSuccess, payload)
          commit('cart/mutation/clearCart', null, {root:true})
          // this.$router.push(response?.data?.payment?.formUrl)
        location.href = response?.data?.payment?.formUrl;
          // rootState.cart.clearCart();
          // if(rootState.auth.isLoggedIn){
          //   this.$router.push('/my/order-history')
          // }else{
          //    this.$router.push('/my/order-history-guest')
          // }

        }
        resolve(response)
      })
      .then((e)=>{
          commit(mutationTypes.sendOrderFailure, e?.response.data?.message)
      })

    })
  }
}
