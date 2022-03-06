<template>
  <div v-if="item" class="product__card">
    <div class="product__card-image">
      <div class="product__card-top">
        <div class="product__card-sale">Mid Season Sale -30%</div>
        <button class="product__card-bookmark">
          <icon-bookmark />
        </button>
      </div>
      <img class="product__card-img" :src="item.image" alt="" />
    </div>
    <div class="product__card-title">
      {{ item.title }}
    </div>
    <div class="product__card-price">
      <p class="product__card-odlprice">
        {{ item.priceOld }}
      </p>
      <p class="product__card-newprice">
        {{ item.priceNew }}
      </p>
    </div>
    <div class="product__card-bottom">
      <button class="page__basket-btn product__card-basket">В корзину</button>
      <a class="product__card-link" href="#?">Подробнее</a>
    </div>
  </div>
</template>

<script>
import IconBookmark from '~/components/icons/IconBookmark.vue'
export default {
  name: 'ProductCard',
  components: {
    IconBookmark,
  },
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
}
</script>
