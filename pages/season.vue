<template>
<div>
  <app-header />
  <app-intro />
  <app-details />
  <app-like />
  <app-news />
  <app-mail />
  <app-footer />
</div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppIntro from "~/components/AppIntro.vue";
import AppDetails from "~/components/AppDetails.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppIntro,
    AppDetails,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>