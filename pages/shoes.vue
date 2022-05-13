<template>
  <div>
    <app-intro-button :image="category.image" :category-id="6">
      <h2 class="intro__title">
        {{ category.title }}
      </h2>
    </app-intro-button>
    <app-subcategory-cards
      :category-id="category.id"
      :items="category.subcategories"
    />
    <app-like :id="category.id" />
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MetaSeo from '@/mixins/MetaSeo.vue'
import { actionTypes } from '@/store'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppSubcategoryCards from '~/components/cards/AppSubcategoryCards.vue'
import AppLike from '~/components/AppLike.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'ShoesPage',
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
    this.getCategory(6)
  },
  methods: {
    ...mapActions({ getCategory: actionTypes.loadCategory }),
  },
}
</script>
