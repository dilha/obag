<template>
  <div>
    <app-intro-button :image="category.image" :category-id="5">
      <h2 class="intro__title">
        {{ category.title }}
      </h2>
      <p class="intro__text">
        {{ category.text }}
      </p>
    </app-intro-button>
    <app-accessories-cards :category-id="category.id" :items="category.subcategories" />
    <app-like :id="category.id" />
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppAccessoriesCards from '~/components/cards/AppAccessoriesCards.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'GlasesPAge',
  components: {
    AppIntroButton,
    AppAccessoriesCards,
    AppLike,
    AppNews,
  },
  computed: {
    ...mapState(['category']),
  },
  mounted() {
    this.getCategory(5)
  },
  methods: {
    ...mapActions({ getCategory: actionTypes.loadCategory }),
  },
}
</script>
