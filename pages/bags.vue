<template>
    <div>
        <app-intro-button :image="category.image">
          <h2 class="intro__title">
            {{category.title}}
          </h2>
        </app-intro-button>
        <app-shoes-cards :items="category.subcategories"/>
        <app-like :id="category.id"  />
        <app-news />
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import{actionTypes} from '@/store';
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppShoesCards from "~/components/cards/AppShoesCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'ChoesPage',
  components: {
    AppIntroButton,
    AppShoesCards,
    AppLike,
    AppNews,
  },
  computed: {
    ...mapState([
      'category'
    ]),
  },
  mounted() {
    this.getCategory(2)
  },
  methods: {
    ...mapActions({getCategory:actionTypes.loadCategory}),
  },
}
</script>
