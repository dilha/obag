<template>
  <div>
    <app-intro-button :image="category.image" :category-id="category.id" :category-slug="category.slug">
      <h2 class="intro__title">
        {{ category.title }}
      </h2>
    </app-intro-button>
    <app-subcategory-cards :category-id="category.id" :category-slug="category.slug" :items="category.subcategories" />
    <app-like :id="category.id" />
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MetaSeo from '@/mixins/MetaSeo.vue'
import { actionTypes } from '@/store'
import { actionTypes as catalogActionTypes } from '@/store/catalog'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppSubcategoryCards from '~/components/cards/AppSubcategoryCards.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'BagsPage',
  components: {
    AppIntroButton,
    AppSubcategoryCards,
    AppLike,
    AppNews,
  },
  mixins: [MetaSeo],
  computed: {
    ...mapState(['category']),
  },
  mounted() {
    this.getCategory(2)
    this.loadAllCategories()
  },
  methods: {
    ...mapActions({ getCategory: actionTypes.loadCategory }),
    ...mapActions('catalog', {
      loadAllCategories: catalogActionTypes.loadAllCategories,
    }),
  },
}
</script>
