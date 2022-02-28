<template>
    <div>
        <app-header />
        <app-intro-button bgImg="assets/images/intro/glasses-intro.jpg">
          <h2 class="intro__title">
            O sun 
          </h2>
          <p class="intro__text">
            O sun, O sun flat and O sun shine - легкие модульные очки-конструктор.
          </p>
        </app-intro-button>
        <app-glasses-cards />
        <app-combination />
        <app-like />
        <app-news />
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppGlassesCards from "~/components/cards/AppGlassesCards.vue";
import AppCombination from "~/components/AppCombination.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'GlasesPAge',
  components: {
    AppHeader,
    AppIntroButton,
    AppGlassesCards,
    AppCombination,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
