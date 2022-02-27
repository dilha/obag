<template>
    <div>
        <app-header />
        <app-intro bgImg="assets/images/intro/collection-intro.jpg" />
        <app-clock-cards />
        <app-like />
        <app-news />
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppIntro from "~/components/AppIntro.vue";
import AppClockCards from "~/components/AppClockCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'ClockPage',
  components: {
    AppHeader,
    AppIntro,
    AppClockCards,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
