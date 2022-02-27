<template>
<div>
  <app-header />
  <app-intro bgImg="assets/images/intro/main-intro.jpg" />
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
import AppHeader from "~/components/AppHeader.vue";
import AppIntro from "~/components/AppIntro.vue";
import AppSeason from "~/components/main/AppSeason.vue";
import AppLike from "~/components/AppLike.vue";
import AppMidFlash from "~/components/main/AppMidFlash.vue";
import AppInsta from "~/components/main/AppInsta.vue";
import AppNews from "~/components/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppIntro,
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
