<template>
    <div>
        <app-header />
        <app-intro-button bgImg="assets/images/intro/collection-intro.jpg">
          <h3 class="intro__title">
            Коллекции
          </h3>
        </app-intro-button>
        <app-collection-cards />
        <app-like />
        <app-news />
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppCollectionCards from "~/components/cards/AppCollectionCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'CollectionPage',
  components: {
    AppHeader,
    AppIntroButton,
    AppCollectionCards,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
