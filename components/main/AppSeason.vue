<template>
  <section v-if="items" class="season page__block">
    <div class="container">
      <div class="season__inner">
        <div
          class="season__intro"
          :style="{
            backgroundImage: `url(${items.image})`,
          }"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <nuxt-link
            tag="button"
            class="intro__btn intro__season"
            to="/promos"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="700"
            >Подробнее</nuxt-link
          >
        </div>
        <div
          v-if="items.products.length"
          class="season__slider"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <VueSlickCarousel :arrows="true">
            <product-card
              v-for="item in items.products"
              :key="item.id"
              :item="item"
            />
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
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
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
