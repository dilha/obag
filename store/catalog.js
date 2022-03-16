
export const state = ()=>({
  categories:[],
  products:[],
  salesProducts:[],
  sales:[],
  selectedSales:[],
  selectedCategory:null,
  error:null,
  isLoading:false,
})

export const mutationTypes = {
  loadCategoriesStart:'mutation/removeSelectedCategory loadCategoriesStart',
  loadCategoriesSuccess:"mutation/loadCategoriesSuccess load categories success",
  loadCategoriesFailure:"mutation/loadCategoriesFailure loadCategoriesFailure",

  setSelectedCategory:'mutation/setSelectedCategory',
  setCategorySales:'mutation/setCategorySales',
  addSelectedSales:'mutation/addSelectedSales',
  removeSelectedSales:'mutation/removeSelectedSales',
  setSalesProducts:'mutation/setSalesProducts',
  removeSalesProducts:'mutation/removeSalesProducts',

  loadProductsStart:'mutation/loadProductsStart',
  loadProductsSuccess:'mutation/loadProductsSuccess',
  loadProductsFailure:'mutation/loadProductsFailure',

}
export const actionTypes = {
  loadAllCategories:'action/loadAllCategories get all categories',
  loadAllCategoryProducts:'action/loadAllCategoryProducts',
  loadAllSubCategoryProducts:'action/loadAllSubCategoryProducts',
  updateSelectedSales:'action/updateSelectedSales'
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
  [mutationTypes.setCategorySales](state, payload){
    state.sales = payload;
  },
  [mutationTypes.setSalesProducts](state, payload){
    // state.products = []
    state.salesProducts = [...state.salesProducts, ...payload]
  },
  [mutationTypes.removeSalesProducts](state, payload){
    // state.salesProducts = [];
    payload.forEach(p1=>{
       state.salesProducts = state.salesProducts.filter(p2=>p2.id !== p1.id);
    })
    // state.salesProducts = state.salesProducts.filter(p=>p.category_id !== payload);
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
  [mutationTypes.addSelectedSales](state, payload){
      state.selectedSales.push(payload)
  },
  [mutationTypes.removeSelectedSales](state, payload){
      state.selectedSales = state.selectedSales.filter(s=>s.id !== payload)
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
        const sales = response.data.sales;

        commit(mutationTypes.setCategorySales, sales)
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
         const sales = response.data.sales;

        commit(mutationTypes.setCategorySales, sales)
        commit(mutationTypes.loadProductsSuccess, products )

        resolve(products);
      })
      .catch((e)=>{
        commit(mutationTypes.loadProductsFailure, e)
      })
    })

  },
  [actionTypes.updateSelectedSales]({commit, state}, sale){
    console.log("SALLALALA", sale)
    const isExistsSale = state.selectedSales.some(s=>s.id === sale.id);
    if(isExistsSale){
      // alert()
        commit(mutationTypes.removeSelectedSales, sale.id)
        commit(mutationTypes.removeSalesProducts, sale?.products)
        return
    }
    commit(mutationTypes.addSelectedSales, sale)
    commit(mutationTypes.setSalesProducts, sale?.products)
  }
}

export const getters={
  selectedCategory:state=>state.selectedCategory ? state.selectedCategory : state.categories[0]
  // selectedSubCategory:(state)=>state.categories.find(c=>c.id === state.selectedCategory.id)
}
