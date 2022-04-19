<template>
  <div>
    <app-intro-button :image="category.image" :category-id="2">
      <h2 class="intro__title">
        {{ category.title }}
      </h2>
    </app-intro-button>
    {{category.subcategories}}
    <app-shoes-cards :category-id="category.id" :items="category.subcategories" />
    <app-like :id="category.id" />
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store'
import { actionTypes as catalogActionTypes } from '@/store/catalog'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppShoesCards from '~/components/cards/AppShoesCards.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'ChoesPage',
  components: {
    AppIntroButton,
    AppShoesCards,
    AppLike,
    AppNews,
  },
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
      loadAllCategories: catalogActionTypes.loadAllCategories
    }),
  }
}
</script>
