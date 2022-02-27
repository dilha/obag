<template>
    <div>
        <app-header />
        <app-intro bgImg="assets/images/intro/collection-intro.jpg" />
        <app-collection-cards />
        <app-like />
        <app-news />
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppIntro from "~/components/AppIntro.vue";
import AppCollectionCards from "~/components/AppCollectionCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'CollectionPage',
  components: {
    AppHeader,
    AppIntro,
    AppCollectionCards,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
