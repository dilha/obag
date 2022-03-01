<template>
    <div>
        <app-intro-button bgImg="assets/images/intro/collection-intro.jpg">
          <h3 class="intro__title">
            Коллекции
          </h3>
        </app-intro-button>
        <app-collection-cards />
        <app-like />
        <app-news />
    </div>
</template>

<script>
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
}
</script>
