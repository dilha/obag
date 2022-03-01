<template>
<div>
  <app-header />
  <app-intro-button bgImg="assets/images/intro/main-intro.jpg" />
  <app-season />
  <app-like />
  <app-mid-flash />
  <app-insta />
  <app-news />
  <app-mail />
  <app-footer />
</div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppSeason from "~/components/main/AppSeason.vue";
import AppLike from "~/components/AppLike.vue";
import AppMidFlash from "~/components/main/AppMidFlash.vue";
import AppInsta from "~/components/main/AppInsta.vue";
import AppNews from "~/components/news/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppIntroButton,
    AppSeason,
    AppLike,
    AppMidFlash,
    AppInsta,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
