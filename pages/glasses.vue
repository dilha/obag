<template>
    <div>
        <app-intro-button :image="category.image">
          <h2 class="intro__title">
            {{category.title}}
          </h2>
          <p class="intro__text">
            {{category.text}}
          </p>
        </app-intro-button>
        <app-glasses-cards :items="category.subcategories"/>
        <app-combination :items="category.constructor" />
        <app-like :items="likesProducts"/>
        <app-news />
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import{actionTypes} from '@/store';
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppGlassesCards from "~/components/cards/AppGlassesCards.vue";
import AppCombination from "~/components/AppCombination.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

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
    ...mapState([
      'category'
    ]),
    ...mapGetters([
      'likesProducts'
    ])
  },
  mounted() {
    this.getCategory(4)
  },
  methods: {
    ...mapActions({getCategory:actionTypes.loadCategory}),
  },
}
</script>
