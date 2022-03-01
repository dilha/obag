<template>
    <div>
        <app-intro-button bgImg="assets/images/intro/clock-intro.jpg">
          <h2 class="intro__title">
            O clock
          </h2>
          <p class="intro__btext">
            Оригинальные часы-конструктор были созданы в 2009 году.
            Простыми жестами вы можете создать более 1300 комбинаций.
          </p>
        </app-intro-button>
        <app-clock-cards />
        <app-combination />
        <app-like />
        <app-news />
    </div>
</template>

<script>
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppClockCards from "~/components/cards/AppClockCards.vue";
import AppCombination from "~/components/AppCombination.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'ClockPage',
  components: {
    AppIntroButton,
    AppClockCards,
    AppCombination,
    AppLike,
    AppNews,
  },
}
</script>
