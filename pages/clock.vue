<template>
    <div>
        <app-header />
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
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppClockCards from "~/components/cards/AppClockCards.vue";
import AppCombination from "~/components/AppCombination.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'ClockPage',
  components: {
    AppHeader,
    AppIntroButton,
    AppClockCards,
    AppCombination,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
