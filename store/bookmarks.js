export const state = ()=>({
  bookmarksProducts:[],
})
export const mutationTypes = {
  addBookmark:'mutation/addBookmark',
  updatedQuantity:'mutation/updatedQuantity',
  removeBookmark:'mutation/removeBookmark',
  setBookmarkProducts:'mutation/setBookmarkProducts'
}
export const actionTypes = {
  addBookmark:'action/addBookmark',
  updatedQuantity:'action/updatedQuantity',
  removeBookmark:'action/removeBookmark',
  loadFavorites:'action/loadFavorites'
}
export const mutations = {
  [mutationTypes.setBookmarkProducts](state, payload){
    state.bookmarksProducts = payload;
  },
  [mutationTypes.addBookmark](state, payload){
    state.bookmarksProducts.push(payload)
  },
    [mutationTypes.removeBookmark](state, payload){
    state.bookmarksProducts.forEach((p, i)=>{
      if(p .id=== payload.id) {
        state.bookmarksProducts.splice(i, 1);
      }
    })
  },
}
export const actions = {

  [actionTypes.loadFavorites]({commit}){
   return new Promise(resolve=>{
        this.$api
          .get('/user/favourites')
          .then((response)=>{
              commit(mutationTypes.setBookmarkProducts, response.data?.products)
              resolve(response.data?.products)
          })
      })
  },

  [actionTypes.addBookmark]({commit, state, rootState}, bookmark){
    const isProductExists = state.bookmarksProducts.some(p=>p.id === bookmark.id);

    if(!isProductExists && rootState.auth.isLoggedIn){
      commit(mutationTypes.addBookmark, bookmark)
      return new Promise(resolve=>{
        this.$api
          .post(`/product/${bookmark.id}/favourite`)
          .then((response)=>{
              resolve({status:response.status, isDelete:false,})
          })
      })


    }

    if(isProductExists && rootState.auth.isLoggedIn){
      commit(mutationTypes.removeBookmark, bookmark)
       return new Promise(resolve=>{
        this.$api
          .delete(`/product/${bookmark.id}/favourite`)
          .then((response)=>{
              resolve({status:response.status, isDelete:true})
          })
      })
    }
  },
  [actionTypes.removeBookmark]({commit}){
    commit(mutationTypes.removeBookmark)
  },

}
export const getters = {
  totalBookmarkCount:state=>state.bookmarksProducts.length,
  // totalBookmarkCost:state=>state.bookmarksProducts.reduce((acc, p) =÷>  acc +=p.price  * p.quantity,0),
  bookmarks:state=>state.bookmarksProducts,
}
