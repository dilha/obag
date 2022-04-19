<template>
  <div>
    <app-intro-button :image="category.image" :category-id="4">
      <h2 class="intro__title">
        {{ category.title }}
      </h2>
      <p class="intro__text">
        {{ category.text }}
      </p>
    </app-intro-button>
    <app-glasses-cards :category-id="category.id" :items="category.subcategories" />
    <app-combination :items="category.constructor" />
    <app-like :id="category.id" />
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store'
import { actionTypes as catalogActionTypes } from '@/store/catalog'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppGlassesCards from '~/components/cards/AppGlassesCards.vue'
import AppCombination from '~/components/AppCombination.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'GlasesPAge',
  components: {
    AppIntroButton,
    AppGlassesCards,
    AppCombination,
    AppLike,
    AppNews,
  },
  computed: {
    ...mapState(['category']),
  },
  mounted() {
    this.getCategory(4)
    this.loadAllCategories()
  },
  methods: {
    ...mapActions({ getCategory: actionTypes.loadCategory }),
    ...mapActions('catalog', {
      loadAllCategories: catalogActionTypes.loadAllCategories
    }),
  },
}
</script>
