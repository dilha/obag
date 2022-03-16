
export const state = ()=>({
  categories:[],
  products:[],
  selectedCategory:null,
  error:null,
  isLoading:false,
})

export const mutationTypes = {
  loadCategoriesStart:'mutation/removeSelectedCategory loadCategoriesStart',
  loadCategoriesSuccess:"mutation/loadCategoriesSuccess load categories success",
  loadCategoriesFailure:"mutation/loadCategoriesFailure loadCategoriesFailure",

  setSelectedCategory:'mutation/setSelectedCategory',

  loadProductsStart:'mutation/loadProductsStart',
  loadProductsSuccess:'mutation/loadProductsSuccess',
  loadProductsFailure:'mutation/loadProductsFailure',

}
export const actionTypes = {
  loadAllCategories:'action/loadAllCategories get all categories',
  loadAllCategoryProducts:'actions/loadAllCategoryProducts',
  loadAllSubCategoryProducts:'actions/loadAllSubCategoryProducts'
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
  [mutationTypes.setSelectedCategory](state, payload){
    state.selectedCategory = payload;
  },

  [mutationTypes.loadProductsStart](state){
    state.isLoading = true;
  },
  [mutationTypes.loadProductsSuccess](state, payload){
    state.isLoading = false;
    state.products = payload;
  },
  [mutationTypes.loadProductsFailure](state, payload){
    state.isLoading = false;
    state.error = payload;
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
        commit(mutationTypes.setSelectedCategory, categories[0]);
        resolve(categories);
      })
      .catch((e)=>{
        commit(mutationTypes.loadCategoriesFailure, e)
      })
    })
  },
  [actionTypes.loadAllCategoryProducts]({commit}, category){

    commit(mutationTypes.setSelectedCategory, category);
    commit(mutationTypes.loadProductsStart);

    return new Promise(resolve => {
      this.$api
      .get(`/category/${category.id}`)
      .then((response)=>{
        const products = response.data.category.products;
        commit(mutationTypes.loadProductsSuccess, products )

        resolve(products);
      })
      .catch((e)=>{
        commit(mutationTypes.loadProductsFailure, e)
      })
    })

  },
  [actionTypes.loadAllSubCategoryProducts]({commit}, subCategoryId){
      console.log("loading... sub")
    commit(mutationTypes.loadProductsStart);

    return new Promise(resolve => {
      this.$api
      .get(`/subcategory/${subCategoryId}`)
      .then((response)=>{
        const products = response.data.subcategory.products;
        commit(mutationTypes.loadProductsSuccess, products )

        resolve(products);
      })
      .catch((e)=>{
        commit(mutationTypes.loadProductsFailure, e)
      })
    })

  },
}

export const getters={
  selectedCategory:state=>state.selectedCategory ? state.selectedCategory : state.categories[0]
  // selectedSubCategory:(state)=>state.categories.find(c=>c.id === state.selectedCategory.id)
}
