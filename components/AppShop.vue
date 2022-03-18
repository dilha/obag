<template>
  <div class="shop__block ">
      <h3 class="shop__title page__title">
        Партнерские магазины
      </h3>
      <div class="shop__inner">
          <app-shop-cards v-for="item in items" :key="item.title" :shop="item"/>
      </div>
  </div>

</template>

<script>
import AppShopCards from "~/components/cards/AppShopCards.vue"

export default {
    name: "AppLike",
    components: {
      AppShopCards,
    },
    data() {
      return {
        items: [
          {
            img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
            title: 'Луцк',
            address: 'Musthave ул.Сухомлинского, 1, ТРЦ "Порт City"',
            phone: '+38 067 958 04 02',
            work: 'с 10:00 до 22:00',
          },
          {
            img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
            title: 'Запорожье',
            address: 'Hey, girl ул. Запорожская 1Б, ТРЦ "City Mall", 1 этаж',
            phone: '+38 067 849 78 02',
            work: 'с 10:00 до 22:00',
          },
          {
            img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
            title: 'Вано-Франковск',
            address: 'Текстильная история Площадь Рынок 8',
            phone: '+38 066 873 29 26',
            work: 'пн-сб - с 10:00 до 19:00, вс - с 11:00 до 18:00',
          },
          {
            img: 'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
            title: 'Львов',
            address: 'Адрес: Musthave ул. Стрыйская, 30, ТРЦ "Кинг Кросс Леополис", 1 этаж',
            phone: '+38 067 255 06 76',
            work: 'с 10:00 до 22:00',
          },
        ]
      }
    }
}
</script>