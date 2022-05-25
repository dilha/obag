<template>
  <div>
    <app-intro-button :image="category.image" :category-id="category.id" :category-slug="category.slug">
      <h2 class="intro__title">
        {{ category.title }}
      </h2>
      <p class="intro__text">
        {{ category.text }}
      </p>
    </app-intro-button>
    <app-subcategory-cards :category-id="category.id" :category-slug="category.slug" :items="category.subcategories" />
    <app-combination title="Откройте для себя огромный выбор комбинаций очков O sun"
      link="catalog/4/ocki" image-url="assets/images/glasses/combination-glasses.jpg" />
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
import AppCombination from '~/components/AppCombination.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'GlasesPAge',
  components: {
    AppIntroButton,
    AppSubcategoryCards,
    AppCombination,
    AppLike,
    AppNews,
  },
  mixins: [MetaSeo],
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
      loadAllCategories: catalogActionTypes.loadAllCategories,
    }),
  },
}
</script>
