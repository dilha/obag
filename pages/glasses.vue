<template>
    <div>
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
    </div>
</template>

<script>
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppGlassesCards from "~/components/cards/AppGlassesCards.vue";
import AppCombination from "~/components/AppCombination.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'GlasesPAge',
  components: {
    AppIntroButton,
    AppGlassesCards,
    AppCombination,
    AppLike,
    AppNews,
  },
}
</script>
