<template>
    <div>
        <app-header />
        <app-intro-button bgImg="assets/images/intro/accessories-intro.jpg">
          <h2 class="intro__title">
            Категория аксессуары
          </h2>
          <p class="intro__text">
            Браслеты, клатчи, косметички, кошельки, защитные маски, подвески и аксессуары для пляжа
          </p>
        </app-intro-button>
        <app-accessories-cards />
        <app-like />
        <app-news />
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppAccessoriesCards from "~/components/cards/AppAccessoriesCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'GlasesPAge',
  components: {
    AppHeader,
    AppIntroButton,
    AppAccessoriesCards,
    AppLike,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
