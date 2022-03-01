<template>
    <section class="will__like page__block">
    <div class="container">
      <div class="will__like-top page__block-top">
        <h3 class="will__like-title page__title">
          Вам понравится
        </h3>
        <div class="will__like-button">
          <button class="will__like-btn">
            O clock
          </button>
          <button class="will__like-btn">
            O bag
          </button>
          <button class="will__like-btn">
            Новинки
          </button>
          <button class="will__like-btn">
            Популярное
          </button>
        </div>
      </div>
      <div class="will__like-inner">
        <product-card v-for="item in items" :key="item" :item="item"/>
      </div>
      <button class="will__like-button page__border-btn">
        Открыть полный каталог
      </button>
    </div>
  </section>
</template>

<script>
import ProductCard from "~/components/product/ProductCard.vue";

export default {
    name: "AppLike",
    components: {
      ProductCard,
    },
    data() {
      return {
        items: [
          {
            title: "Женская сумка O bag Unique Сангрия",
            priceOld: "1990.00 грн.",
            priceNew: "1393.00 грн",
            image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          },
          {
            title: "Женская сумка O bag Unique Сангрия",
            priceOld: "1990.00 грн.",
            priceNew: "1393.00 грн",
            image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          },
          {
            title: "Женская сумка O bag Unique Сангрия",
            priceOld: "1990.00 грн.",
            priceNew: "1393.00 грн",
            image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          },
          {
            title: "Женская сумка O bag Unique Сангрия",
            priceOld: "1990.00 грн.",
            priceNew: "1393.00 грн",
            image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          },
        ]
      }
    }
}
</script>