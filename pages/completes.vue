<template>
   <div>
      <app-intro-button :image="category.image" :category-id="1">
         <h3 class="intro__title">
            {{ subcategory.subcategory.title }}
         </h3>
      </app-intro-button>
      <app-complete-cards :category-id="category.id" :items="subcategory.completes" />
      <app-like :id="category.id" />
      <app-news />
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store'
import { actionTypes as catalogActionTypes } from '@/store/catalog'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppCompleteCards from '~/components/cards/AppCompleteCards.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
   name: 'CompletesPage',
   components: {
      AppIntroButton,
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
   },
   mounted() {
      this.сategoryId = this.$route?.params?.id
      this.subcategoryId = this.$route?.params?.subcatid;
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
