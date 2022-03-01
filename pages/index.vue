<template>
<div>
  <app-intro-button bgImg="assets/images/intro/main-intro.jpg" />
  <app-season />
  <app-like />
  <app-mid-flash />
  <app-insta />
  <app-news />
</div>
</template>

<script>
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppSeason from "~/components/main/AppSeason.vue";
import AppLike from "~/components/AppLike.vue";
import AppMidFlash from "~/components/main/AppMidFlash.vue";
import AppInsta from "~/components/main/AppInsta.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'IndexPage',
  components: {
    AppIntroButton,
    AppSeason,
    AppLike,
    AppMidFlash,
    AppInsta,
    AppNews,
  },
}
</script>
