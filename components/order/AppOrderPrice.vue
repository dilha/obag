<template>
  <div v-if="totalProductCost > 0" class="basket__price">
    <app-order-promo />
    <div class="order__price">
      <div class="order__price-content">
        <div class="order__total">
          <p class="order__total-text">Итого:</p>
          <p class="order__total-number">{{ totalProductCost }} тг</p>
        </div>
        <!-- <div class="order__friday">
          <p class="order__friday-text">Доставка:</p>
          <p class="order__friday-number">- 0тг.</p>
        </div> -->
        <div class="order__delivery">
          <p class="order__delivery-text">Доставка в отделение Новой Почты:</p>
          <p class="order__delivery-number">{{ deliveryPrice }} тг.</p>
        </div>
        <div class="order__all">
          <p class="order__all-text">Всего:</p>
          <p class="order__all-number">{{ totalProductCost }} тг.</p>
        </div>
      </div>
      <div class="order__buttons">
        <button
          class="order__buttons-issue"
          @click.prevent="$emit('clickCheckoutButton')"
        >
          Оформить заказ
        </button>
        <button class="order__buttons-delete" @click.prevent="clearCart">
          Очистить корзину
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Нет товара</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { actionTypes } from '~/store/cart'
export default {
  name: 'AppOrderPrice',
  computed: {
    ...mapState('cart', ['deliveryPrice']),
    ...mapGetters('cart', ['totalProductCost']),
  },
  mounted() {
    this.setDeliveryPrice()
  },
  methods: {
    ...mapActions('cart', {
      clearCart: actionTypes.clearCart,
      setDeliveryPrice: actionTypes.setDeliveryPrice,
    }),
  },
}
</script>
