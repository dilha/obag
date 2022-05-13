const ROOT_CATEGORY = 'ROOT_CATEGORY'
const ROOT_SUBCATEGORY = 'ROOT_SUBCATEGORY'
const ROOT_COMPLETE = 'ROOT_COMPLETE'

const productStorage = {
   // category init
   hasRootCategory() {
      return localStorage.getItem(ROOT_CATEGORY) !== null
   },
   setRootCategory(categoryId) {
      localStorage.setItem(ROOT_CATEGORY, categoryId)
      this.removeRootSubcategory()
   },
   getRootCategory() {
      return parseInt(localStorage.getItem(ROOT_CATEGORY))
   },
   removeRootCategory() {
      localStorage.removeItem(ROOT_CATEGORY)
      this.removeRootSubcategory()
   },


   // Subcategory init
   hasRootSubcategory() {
      return localStorage.getItem(ROOT_SUBCATEGORY) !== null
   },
   setRootSubcategory(subcategoryId) {
      localStorage.setItem(ROOT_SUBCATEGORY, subcategoryId)
      this.removeRootComplete()
   },
   getRootSubcategory() {
      return parseInt(localStorage.getItem(ROOT_SUBCATEGORY))
   },
   removeRootSubcategory() {
      localStorage.removeItem(ROOT_SUBCATEGORY)
      this.removeRootComplete()
   },

   // Complete init
   hasRootComplete() {
      return localStorage.getItem(ROOT_COMPLETE) !== null
   },
   setRootComplete(completeId) {
      localStorage.setItem(ROOT_COMPLETE, completeId)
   },
   getRootComplete() {
      return parseInt(localStorage.getItem(ROOT_COMPLETE))
   },
   removeRootComplete() {
      localStorage.removeItem(ROOT_COMPLETE)
   },
}


export default productStorage;