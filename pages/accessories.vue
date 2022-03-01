<template>
    <div>
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
    </div>
</template>

<script>
import AppIntroButton from "~/components/intro/AppIntroButton.vue";
import AppAccessoriesCards from "~/components/cards/AppAccessoriesCards.vue";
import AppLike from "~/components/AppLike.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'GlasesPAge',
  components: {
    AppIntroButton,
    AppAccessoriesCards,
    AppLike,
    AppNews,
  },
}
</script>
