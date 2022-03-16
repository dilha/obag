<template>
    <div>
        <app-intro-button :image="category.image">
          <h3 class="intro__title">
            {{category.title}}
          </h3>
        </app-intro-button>
        <app-collection-cards :items="category.subcategories" />
        <app-like :items="likesProducts"/>
        <app-news />
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import{actionTypes} from '@/store';
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppCollectionCards from "~/components/cards/AppCollectionCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'CollectionPage',
  components: {
    AppIntroButton,
    AppCollectionCards,
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
    this.getCategory(1)
  },
  methods: {
    ...mapActions({getCategory:actionTypes.loadCategory}),
  },
}
</script>
