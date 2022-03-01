<template>
<div>
  <app-header />
  <app-intro-button bgImg="assets/images/intro/season-intro.jpg" />
  <app-details-cards />
  <app-catalog-cards />
  <app-like />
  <app-news />
  <app-mail />
  <app-footer />
</div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppDetailsCards from "~/components/AppDetailsCards.vue";
import AppCatalogCards from "~/components/cards/AppCatalogCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'SeasonPage',
  components: {
    AppHeader,
    AppIntroButton,
    AppDetailsCards,
    AppCatalogCards,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>