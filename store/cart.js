export const state = ()=>({
  cartProducts:[],
})

export const mutationTypes = {
  addProduct:'mutation/addProduct',
  removeProduct:'mutation/removeProduct',
  updatedQuantity:'mutation/updatedQuantity',
  clearCart:'mutation/clearCart',
}
export const actionTypes = {
   addProduct:'action/addProduct',
   updatedQuantity:'action/updatedQuantity',
   removeProduct:'action/removeProduct',
   clearCart:'action/clearCart'
}

export const mutations = {
  [mutationTypes.addProduct](state, payload){
    state.cartProducts.push(payload)
  },
  [mutationTypes.removeProduct](state, payload){
     state.cartProducts.forEach((p, i)=>{
       if(p.id === payload) {
            state.cartProducts.splice(i, 1);
         }
       })
  },
  [mutationTypes.updatedQuantity](state, {type, product}){

    const productIndex = state.cartProducts.findIndex(p=>p.id === product.id);

    switch(type){
      case'increase':
       state.cartProducts.forEach((p, i)=>{
         if(i === productIndex){

            const newQuantity = state.cartProducts[i].quantity++;
            this._vm.$set(state.cartProducts, i, {
              quantity: newQuantity,
              ...state.cartProducts[i],
            })
         }
       })
       return
       case 'decrease':

         state.cartProducts.forEach((p, i)=>{
         if(i === productIndex && p.quantity > 1){
            const newQuantity = state.cartProducts[i].quantity--
            this._vm.$set(state.cartProducts, i, {
              quantity: newQuantity,
              ...state.cartProducts[i],
            })
         }else if(i === productIndex && p.quantity === 1) {
            state.cartProducts.splice(i, 1);
         }
       })
    }
  },
    [mutationTypes.clearCart](state){
    state.cartProducts = []
  },
}
export const actions = {
  [actionTypes.addProduct]({commit, state}, product){

    const isProductExists = state.cartProducts.some(p=>p.id === product.id);

    if(!isProductExists){
      product.quantity = 1;
      commit(mutationTypes.addProduct, product)
    }else{
      alert("Продукт уже добавлен")
    }
  },

  [actionTypes.updatedQuantity]({commit}, {type, product}){
    commit(mutationTypes.updatedQuantity, {type, product})
  },
  [actionTypes.removeProduct]({commit}, product){
    commit(mutationTypes.removeProduct,  product)
  },
  [actionTypes.clearCart]({commit}){
    commit(mutationTypes.clearCart)
  }
}
export const getters = {
  totalProductCount:state=>state.cartProducts.length,
  // eslint-disable-next-line no-return-assign
  totalProductCost:state=>state.cartProducts.reduce((acc, p) =>  acc +=p.price  * p.quantity,0),
  products:state=>state.cartProducts

}
