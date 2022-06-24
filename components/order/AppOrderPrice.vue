<template>
  <div v-if="totalProductCost > 0" class="basket__price">
    <!-- <app-order-promo /> -->
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
        <!-- <div class="order__delivery">
          <p class="order__delivery-text">Доставка в отделение Новой Почты:</p>
          <p class="order__delivery-number">{{ deliveryPrice }} тг.</p>
        </div> -->
        <div class="order__all">
          <p class="order__all-text">Всего:</p>
          <p class="order__all-number">{{ totalProductCost }} тг.</p>
        </div>
      </div>
      <div class="order__methods">
        <div class="order__method">
          <div class="order__method-title">Метод доставки:</div>
          <button
            class="order__method-btn"
            :class="{ active: deliveryMethod === 'pickup' }"
            @click="setDeliveryMethod('pickup')"
          >
            Самовывоз
          </button>
          <button
            class="order__method-btn"
            :class="{ active: deliveryMethod === 'mail' }"
            @click="setDeliveryMethod('mail')"
          >
            Доставка
          </button>
        </div>
        <div class="order__method">
          <div class="order__method-title">Метод оплаты:</div>
          <button
            class="order__method-btn"
            :class="{ active: paymentMethod === 'card' }"
            @click="setPaymentMethod('card')"
          >
            Онлайн-оплата
          </button>
          <button
            class="order__method-btn"
            :class="{ active: paymentMethod === 'cash' }"
            @click="setPaymentMethod('cash')"
          >
            Наличными
          </button>
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
// import AppOrderPromo from './AppOrderPromo.vue'
import { actionTypes } from '~/store/cart'

export default {
  name: 'AppOrderPrice',
  components: {
    // AppOrderPromo,
  },
  computed: {
    ...mapState('cart', ['deliveryPrice', 'deliveryMethod', 'paymentMethod']),
    ...mapGetters('cart', ['totalProductCost']),
  },
  mounted() {
    this.setDeliveryPrice()
  },
  methods: {
    ...mapActions('cart', {
      clearCart: actionTypes.clearCart,
      setDeliveryPrice: actionTypes.setDeliveryPrice,
      setDeliveryMethod: actionTypes.setDeliveryMethod,
      setPaymentMethod: actionTypes.setPaymentMethod,
    }),
  },
}
</script>
