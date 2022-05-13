
export const state = ()=>({
  productType: [],
  productConstructor: [],
  error:null,
  isLoading:false,
})

export const mutationTypes = {
  loadConstructorSuccess:"mutation/constructorSuccess load constructor success",
  loadTypeSuccess:"mutation/typeSuccess load type success",
}
export const actionTypes = {
  loadConstructor:'action/loadConstructor get all constructor',
  loadType:'action/loadType get all elements',
}

export const mutations = {
  [mutationTypes.loadConstructorSuccess](state, payload){
    state.productConstructor = payload;
  },

  [mutationTypes.loadTypeSuccess](state, payload){
    state.productType = payload;
  },
}
export const actions = {
  [actionTypes.loadConstructor]({commit}, slug){
    return new Promise(resolve => {
      this.$api
      .get(`/constructor/${slug}`)
      .then((response)=>{
        const productConstructor = response.data.constructor;
        // console.log(response.data)
        commit(mutationTypes.loadConstructorSuccess, productConstructor )
        resolve(productConstructor);
      })
    })
  },

  [actionTypes.loadType]({commit}){
    return new Promise(resolve => {
      this.$api
      .get('/constructor')
      .then((response)=>{
        const productType = response.data;
        // console.log(response.data)
        commit(mutationTypes.loadTypeSuccess, productType )
        resolve(productType);
      })
    })
  },
}

export const getters = {

}
