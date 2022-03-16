<template>
<div>
  <app-intro-button :image="assets/images/intro/season-intro.jpg" />
  <app-details-cards />
  <app-catalog-cards />
  <app-like />
  <app-news />

  
</div>
</template>

<script>
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppDetailsCards from "~/components/cards/AppDetailsCards.vue";
import AppCatalogCards from "~/components/cards/AppCatalogCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'SeasonPage',
  components: {
    AppIntroButton,
    AppDetailsCards,
    AppCatalogCards,
    AppLike,
    AppNews,
  },
}
</script>