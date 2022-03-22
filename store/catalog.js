
export const state = ()=>({
  categories:[],
  products:[],
  filters:[],
  complects:[],
  selectedCategory:null,
  selectedSubCategory:null,
  error:null,
  isLoading:false,
  searchTerm:''

})

export const mutationTypes = {
  loadCategoriesStart:'mutation/removeSelectedCategory loadCategoriesStart',
  loadCategoriesSuccess:"mutation/loadCategoriesSuccess load categories success",
  loadCategoriesFailure:"mutation/loadCategoriesFailure loadCategoriesFailure",

  setSelectedCategory:'mutation/setSelectedCategory',
  setSelectedSubCategory:'mutation/setSelectedSubCategory',
  setCategoryFilters:'mutation/setCategoryFilters',
  setComplects:'mutation/setComplects',

  loadProductsStart:'mutation/loadProductsStart',
  loadProductsSuccess:'mutation/loadProductsSuccess',
  loadProductsFailure:'mutation/loadProductsFailure',

  loadSearchProductsStart:'mutation/loadSearchProductsStart',
  loadSearchProductsSuccess:'mutation/loadSearchProductsSuccess',
  loadSearchProductsFailure:'mutation/loadSearchProductsFailure',

  setSearchTerm: 'mutation/setSearchTerm changed app header serach input"'


}
export const actionTypes = {
  loadAllCategories:'action/loadAllCategories get all categories',
  loadAllCategoryProducts:'action/loadAllCategoryProducts',
  loadAllSubCategoryProducts:'action/loadAllSubCategoryProducts',
  loadFilterProducts:'action/loadFilterProducts',
  loadSearchProducts:'action/loadSearchProducts',
  changeSearchTerm:'actions/changeSearchTerm'


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
  [mutationTypes.setSelectedSubCategory](state, payload){
    state.selectedSubCategory = payload;
  },
  [mutationTypes.setCategoryFilters](state, payload){
    state.filters = payload;
  },
  [mutationTypes.setComplects](state, payload){
    state.complects = payload;
  },

  [mutationTypes.loadProductsStart](state){
    state.isLoading = true;
  },
  [mutationTypes.loadProductsSuccess](state, payload){
    state.isLoading = false;
    state.products = payload
  },
  [mutationTypes.loadProductsFailure](state, payload){
    state.isLoading = false;
    state.error = payload;
  },

  [mutationTypes.loadSearchProductsStart](state){
    state.isLoading = true;
  },
  [mutationTypes.loadSearchProductsSuccess](state, payload){
    state.isLoading = false;
    state.products = payload
  },
  [mutationTypes.loadSearchProductsFailure](state, payload){
    state.isLoading = false;
    state.error = payload;
  },

  [mutationTypes.setSearchTerm](state, payload){
    state.searchTerm = payload;
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
        const filters = response.data?.filters;
        commit(mutationTypes.loadProductsSuccess, products )
           commit(mutationTypes.setCategoryFilters, filters )

        resolve(products);
      })
      .catch((e)=>{
        commit(mutationTypes.loadProductsFailure, e)
      })
    })

  },
  [actionTypes.loadAllSubCategoryProducts]({commit}, subCategoryId){
    commit(mutationTypes.loadProductsStart);
    commit(mutationTypes.setSelectedSubCategory, subCategoryId);
    return new Promise(resolve => {
      this.$api
      .get(`/subcategory/${subCategoryId}`)
      .then((response)=>{
        const products = response.data.subcategory.products;
        const filters = response.data?.filters;
        const complects = response.data.completes;
        console.log(response.data)
        commit(mutationTypes.loadProductsSuccess, products )
        commit(mutationTypes.setCategoryFilters, filters )
        commit(mutationTypes.setComplects, complects )

        resolve(products);
      })
      .catch((e)=>{
        commit(mutationTypes.loadProductsFailure, e)
      })
    })

  },
  [actionTypes.loadSearchProducts]({commit}, term){

    commit(mutationTypes.loadSearchProductsStart);
    // commit(mutationTypes.setSelectedSubCategory, null);
    // commit(mutationTypes.setSelectedCategory, null);
    // commit(mutationTypes.setCategoryFilters, null )

    return new Promise(resolve => {
      this.$api
      .get(`/products/search/${term}`)
      .then((response)=>{
        const products = response.data?.products;
        commit(mutationTypes.loadSearchProductsSuccess, products )
        resolve(products);
      })
      .catch((e)=>{
        commit(mutationTypes.loadSearchProductsFailure, e)
      })
    })
  },
  [actionTypes.loadFilterProducts]({commit},  payload){
    commit(mutationTypes.loadProductsStart);
    const params ={ids:payload.filters};
    if(payload?.price_from){
      params.price_from = payload.price_from
    }
    if(payload?.price_to){
      params.price_to = payload.price_to
    }
    if(payload?.complete_id){
      params.complete_id = payload.complete_id
    }

    let url  = `/subcategory/${payload.subCategoryId}/filtered`
    if(!payload?.subCategoryId){
      url = `/category/${payload.categoryId}/filtered`
    }

    return new Promise(resolve => {
      this.$api
      .post(url, params)
      .then((response)=>{
        const products = response.data.products;
        commit(mutationTypes.loadProductsSuccess, products )
        resolve(products);
      })
      .catch((e)=>{
        commit(mutationTypes.loadProductsFailure, e)
      })
    })
  },

    [actionTypes.changeSearchTerm]({commit}, term){
      commit(mutationTypes.setSearchTerm, term)
  },

}

export const getters={
  selectedCategory:state=>state.selectedCategory ? state.selectedCategory : state.categories[0]
}
