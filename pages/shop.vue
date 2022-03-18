<template>
  <div>
    <app-intro-arrow>
      <h3 class="intro__title intro__title-arrow">
        Магазины O bag KAZAKHSTAN
      </h3>
    </app-intro-arrow>
    <section class="shop">
      <div class="container">
        <div class="shop__block page__block">
          <div class="shop__inner">
              <app-shop-cards v-for="(item, index) in items" :key="index" :shop="item"/>
          </div>
        </div>
        <app-shop />
      </div>
    </section>
    <app-news />
  </div>
</template>

<script>
import AppIntroArrow from "~/components/intro/AppIntroArrow.vue";
import AppShopCards from "~/components/cards/AppShopCards.vue"
import AppShop from "~/components/AppShop.vue"
import AppNews from "~/components/news/AppNews.vue"; 

export default {
  name: "ShopPage",
  components: {
    AppIntroArrow,
    AppNews,
    AppShopCards,
    AppShop,
  },
  data() {
    return {
      items: [
        {
          img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
          title: 'Киев',
          address: 'ул. Антоновича, 176, ТРЦ Ocean Plaza',
          phone: '+38 066 924 96 50',
          work: 'с 10:00 до 22:00',
        },
        {
          img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
          title: 'Киев',
          address: 'Спортивная площадь, 1А, ТРЦ Gulliver',
          phone: '+38 050 228 30 22',
          work: 'с 10:00 до 22:00',
        },
        {
          img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
          title: 'Днепр',
          address: 'ул. Глинки, 2, ТРК МОСТ-Сити',
          phone: '+38 099 689 75 29',
          work: 'с 10:00 до 22:00',
        },
        {
          img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
          title: 'Одесса',
          address: 'Фонтанка, Южная дорога, 1, ТРЦ Ривьера',
          phone: '+38 099 027 00 68',
          work: 'с 10:00 до 22:00',
        },
      ]
    }
  }
}
</script>