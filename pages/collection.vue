<template>
  <div>
    <app-intro-button :image="category.image" :category-id="1">
      <h3 class="intro__title">
        {{ category.title }}
      </h3>
    </app-intro-button>
    <app-collection-cards :category-id="category.id" :items="category.subcategories" />
    <app-like :id="category.id" />
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppCollectionCards from '~/components/cards/AppCollectionCards.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'CollectionPage',
  components: {
    AppIntroButton,
    AppCollectionCards,
    AppLike,
    AppNews,
  },
  computed: {
    ...mapState(['category']),
  },
  mounted() {
    this.getCategory(1)
  },
  methods: {
    ...mapActions({ getCategory: actionTypes.loadCategory }),
  },
}
</script>
