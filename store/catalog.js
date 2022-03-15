
export const state = ()=>({
  categories:[],
  products:[],
  selectedCategories:[],
  error:null,
  isLoading:false,
})

export const mutationTypes = {
  loadCategoriesStart:'mutation/removeSelectedCategory loadCategoriesStart',
  loadCategoriesSuccess:"mutation/loadCategoriesSuccess load categories success",
  loadCategoriesFailure:"mutation/loadCategoriesFailure loadCategoriesFailure",

  addSelectedCategory:'mutation/addSelectedCategory add one category',
  removeSelectedCategory:'mutation/removeSelectedCategory add one category'
}
export const actionTypes = {
  loadAllCategories:'action/loadAllCategories get all categories',
  addSelectedCategory:'action/addSelectedCategory add category',
  removeSelectedCategory:'action/removeSelectedCategory remove category'
}

export const mutations = {
  [mutationTypes.loadCategoriesStart](state){
    state.isLoading = true;
  },
  [mutationTypes.loadCategoriesSuccess](state, payload){
    state.isLoading = false;
    state.categories = payload;
  },
  [mutationTypes.loadCategoriesFailure](state, payload){
    state.isLoading = false;
    state.error = payload;
  },
  [mutationTypes.addSelectedCategory](state, payload){
    console.log("WTFFFFFF")
    state.selectedCategories = [...state.selectedCategories, payload]
  },
  [mutationTypes.removeSelectedCategory](state, payload){
      console.log("remove")
    state.selectedCategories = state.selectedCategories.filter(c=>c.id !== payload)
  },
}
export const actions = {
  [actionTypes.loadAllCategories]({commit}){

    commit(mutationTypes.loadCategoriesStart);
    return new Promise(resolve => {
      this.$api
      .get('/get-categories')
      .then((response)=>{
        const categories = response.data.categories;
        commit(mutationTypes.loadCategoriesSuccess, categories )
        // console.log("CALING DATA", data)
        resolve(categories);
      })
      .catch((e)=>{
        commit(mutationTypes.loadCategoriesFailure, e)
      })
    })
  },
  [actionTypes.addSelectedCategory]({commit}, id){
    console.log(id)
    commit(mutationTypes.addSelectedCategory, id);

  },
  [actionTypes.removeSelectedCategory]({commit}, id){

    commit(mutationTypes.removeSelectedCategory, id);

  }
}

export const getters={
  defaultSubCategories:(state)=>state.categories[0]?.subcategories
}
