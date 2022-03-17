<template>
    <section class="bookmarks">
        <div class="container">
            <h3 class="bookmarks__title page__title">
                Мои закладки
            </h3>
            <div class="will__like-inner">
                <product-card v-for="item in bookmarks" :key="item" :item="item"/>
            </div>
        </div>
    </section>
</template>



<script>
import { mapGetters } from 'vuex'
import ProductCard from "~/components/product/ProductCard.vue";

export default {
    name: "BookmarksPage",
    components: {
        ProductCard,
    },
    data() {
      return {
        items: [
          // {
          //   title: "Женская сумка O bag Unique Сангрия",
          //   priceOld: "1990.00 грн.",
          //   priceNew: "1393.00 грн",
          //   image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          // },
          // {
          //   title: "Женская сумка O bag Unique Сангрия",
          //   priceOld: "1990.00 грн.",
          //   priceNew: "1393.00 грн",
          //   image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          // },
          // {
          //   title: "Женская сумка O bag Unique Сангрия",
          //   priceOld: "1990.00 грн.",
          //   priceNew: "1393.00 грн",
          //   image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          // },
          // {
          //   title: "Женская сумка O bag Unique Сангрия",
          //   priceOld: "1990.00 грн.",
          //   priceNew: "1393.00 грн",
          //   image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          // },
        ]
      }
    },
    computed: {
    ...mapGetters('bookmarks', ['bookmarks']),
    },
}
</script>

<style lang="scss">
.bookmarks {
    margin: 60px 0 120px;
}
</style>