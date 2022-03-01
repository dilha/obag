<template>
    <div>
        <app-header />
        <app-intro-button bgImg="assets/images/intro/shoes-intro.jpg">
          <h2 class="intro__button-title">
            ОБУВЬ
          </h2>
        </app-intro-button>
        <app-shoes-cards />
        <app-like />
        <app-news />
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppShoesCards from "~/components/cards/AppShoesCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'ChoesPage',
  components: {
    AppHeader,
    AppIntroButton,
    AppShoesCards,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
