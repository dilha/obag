<template>
  <div>
    <app-subcat-intro-button :image="category.image">
      <h3 class="intro__title">
        {{ pageTitle }}
      </h3>
    </app-subcat-intro-button>
    <app-complete-cards :items="subcategory.completes" />
    <app-like :category-id="categoryId" :category-slug="categorySlug" />
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MetaSeo from '@/mixins/MetaSeo.vue'
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
  mixins: [MetaSeo],
  data() {
    return {
      categoryId: null,
      categorySlug: null,
      subcategoryId: null,
      subcategorySlug: null,
    }
  },
  computed: {
    ...mapState(['category', 'subcategory']),
    ...mapState('catalog', ['selectedSubCategory', 'completes']),
    pageTitle() {
      return this.subcategory?.subcategory?.title || ''
    },
  },
  mounted() {
    this.categoryId = this.$route?.params?.id
    this.categorySlug = this.$route?.params?.slug
    this.subcategoryId = this.$route?.params?.subcatId
    this.subcategorySlug = this.$route?.params?.subcatSlug
    this.getCategory(this.categoryId)
    this.getSubcategory(this.subcategoryId)
    this.loadAllCategories()
  },
  methods: {
    ...mapActions({
      getCategory: actionTypes.loadCategory,
      getSubcategory: actionTypes.loadSubcategory,
    }),
    ...mapActions('catalog', {
      loadAllCategories: catalogActionTypes.loadAllCategories,
    }),
  },
}
</script>
