<template>
  <div>
    <section class="basket">
      <div class="container">
        <h3 class="basket__title page__title">Корзина</h3>
        <div class="basket__inner">
          <div class="basket__products">
            <app-order-products v-for="item in 3" :key="item" />
          </div>
          <div class="basket__price">
            <app-order-promo />
            <app-order-price />
          </div>
        </div>
      </div>
    </section>
    <app-news />
  </div> 
</template>

<script>
import AppOrderProducts from '~/components/order/AppOrderProducts.vue'
import AppOrderPromo from '~/components/order/AppOrderPromo.vue'
import AppOrderPrice from '~/components/order/AppOrderPrice.vue'
import AppNews from '~/components/news/AppNews.vue'
export default {
  name: 'BasketPage',
  components: {
    AppOrderProducts,
    AppOrderPromo,
    AppOrderPrice,
    AppNews,
  },
}
</script>