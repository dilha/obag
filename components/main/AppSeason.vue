<template>
  <section class="season page__block">
    <div class="container">
      <div class="season__inner">
        <div
          class="season__intro"
          :style="{
            backgroundImage: `url(${getImage(
              'assets/images/intro/main-season-intro.jpg'
            )})`,
          }"
        >
          <button class="intro__btn intro__season">Смотреть</button>
        </div>
        <div class="season__slider">
          <!-- <swiper>
            <swiper-slide v-for="item in items" :key="item">
              <product-card :item="item" />
            </swiper-slide>
            <button class="swiper-button-prev season__slider-btn season__slider-prev">
              <img src="@/assets/images/icons/left-arrow.svg" alt="">
            </button>
            <button class="swiper-button-next season__slider-btn season__slider-next">
              <img src="@/assets/images/icons/right-arrow.svg" alt="">
            </button>
          </swiper> -->
          <VueSlickCarousel :arrows="true">
            <product-card v-for="item in items" :key="item" :item="item" />
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import ProductCard from '../product/ProductCard.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'AppSeason',
  components: { ProductCard, VueSlickCarousel },
  data() {
    return {
      items: [
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://pp.userapi.com/c636831/v636831783/3277d/F43lnK3KyBk.jpg',
        },
      ],
      // swiperOption: {
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      // },
    }
  },
  methods: {
    getImage(path) {
      return require('@/' + path)
    },
  },
}
</script>

<style lang="scss">
.slick {
  &-next,
  &-prev {
    background-image: url(@/assets/images/icons/right-arrow.svg) !important;
    width: 24px;
    height: 24px;
    transform: translateX(-50%);
    &:hover {
      background-image: url(@/assets/images/icons/right-arrow.svg) !important;
    }

    &::before {
      content: '';
    }
  }
  &-prev {
    transform: rotate(180deg);
    left: -40px;
  }
  &-next {
    right: -40px;
  }
}
</style>