<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__top">
        <h5 class="modal__top-title">Ваш заказ:</h5>
      </div>
      <div class="modal__products">
      <app-order-products v-for="item in 3" :key="item" />
      </div>
      <div class="modal__bottom">
        <app-order-promo />
        <app-order-price />
      </div>
    </div>
    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="" />
    </button>
  </div>
</template>

<script>
import AppOrderProducts from '~/components/order/AppOrderProducts.vue'
import AppOrderPromo from '~/components/order/AppOrderPromo.vue'
import AppOrderPrice from '~/components/order/AppOrderPrice.vue'

export default {
  name: 'AppModalProducts',
  components: {
    AppOrderProducts,
    AppOrderPromo,
    AppOrderPrice,
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
  
}
</script>