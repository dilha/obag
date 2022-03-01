<template>
    <div>
        <app-intro-button bgImg="assets/images/intro/shoes-intro.jpg">
          <h2 class="intro__title">
            ОБУВЬ
          </h2>
        </app-intro-button>
        <app-shoes-cards />
        <app-like />
        <app-news />
    </div>
</template>

<script>
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppShoesCards from "~/components/cards/AppShoesCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'ChoesPage',
  components: {
    AppIntroButton,
    AppShoesCards,
    AppLike,
    AppNews,
  },
}
</script>
