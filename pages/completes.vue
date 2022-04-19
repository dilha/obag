<template>
   <div>
      <app-subcat-intro-button :image="category.image" :category-id="сategoryId" :subcat-id="subcategoryId">
         <h3 class="intro__title">
            {{ pageTitle }}
         </h3>
      </app-subcat-intro-button>
      <app-complete-cards :category-id="category.id" :subcat-id="subcategoryId" :items="subcategory.completes" />
      <app-like :id="category.id" />
      <app-news />
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store'
import { actionTypes as catalogActionTypes } from '@/store/catalog'
import AppSubcatIntroButton from '~/components/intro/AppSubcatIntroButton.vue'
import AppCompleteCards from '~/components/cards/AppCompleteCards.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
   name: 'CompletesPage',
   components: {
      AppSubcatIntroButton,
      AppLike,
      AppNews,
      AppCompleteCards,
   },
   data() {
      return {
         сategoryId: null,
         subcategoryId: null
      }
   },
   computed: {
      ...mapState(['category', 'subcategory']),
      ...mapState('catalog', [
         'selectedSubCategory',
         'completes',
      ]),
      pageTitle() {
         return this.subcategory?.subcategory?.title || ''
      }
   },
   mounted() {
      this.сategoryId = this.$route?.params?.id
      this.subcategoryId = this.$route?.params?.subcatId;
      this.getCategory(this.сategoryId)
      this.getSubcategory(this.subcategoryId)
      this.loadAllCategories()
   },
   methods: {
      ...mapActions({
         getCategory: actionTypes.loadCategory,
         getSubcategory: actionTypes.loadSubcategory
      }),
      ...mapActions('catalog', {
         loadAllCategories: catalogActionTypes.loadAllCategories,
      }),
   },
}
</script>
