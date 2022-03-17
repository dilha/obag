export const state = ()=>({
  bookmarksProducts:[],
})
export const mutationTypes = {
  addBookmarks:'mutation/addBookmarks',
  // removeBookmarks:'mutation/removeBookmarks',
  updatedQuantity:'mutation/updatedQuantity',
  clearBookmarks:'mutation/clearBookmarks',
}
export const actionTypes = {
  addBookmarks:'action/addBookmarks',
  // removeBookmarks:'action/removeBookmarks',
  updatedQuantity:'action/updatedQuantity',
  clearBookmarks:'action/clearBookmarks'
}
export const mutations = {
  [mutationTypes.addBookmarks](state, payload){
    state.bookmarksProducts.push(payload)
  },
    [mutationTypes.clearBookmarks](state, payload){
    state.bookmarksProducts.forEach((p, i)=>{
      if(p .id=== payload.id) {
        state.bookmarksProducts.splice(i, 1);
        // this.$delete(this.bookmarksProducts, i)
      }
    })
  },
}
export const actions = {
  [actionTypes.addBookmarks]({commit, state}, bookmarks){
    const isProductExists = state.bookmarksProducts.some(p=>p.id === bookmarks.id);
    console.log("CALLL", isProductExists)

    if(!isProductExists){
      commit(mutationTypes.addBookmarks, bookmarks)
    } else{
      commit(mutationTypes.clearBookmarks, bookmarks)
    }
  },
  [actionTypes.clearBookmarks]({commit}){
    commit(mutationTypes.clearBookmarks)
  },
}
export const getters = {
  totalBookmarkCount:state=>state.bookmarksProducts.length,
  // totalBookmarkCost:state=>state.bookmarksProducts.reduce((acc, p) =÷>  acc +=p.price  * p.quantity,0),
  bookmarks:state=>state.bookmarksProducts
}
