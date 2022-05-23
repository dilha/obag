<template>
  <div class="modal">
    <div v-if="!responseMessage" class="modal__container">
      <div class="modal__top">
        <h5 class="modal__top-title">Ваш заказ:</h5>
      </div>
      <div class="modal__contacts">
        <h6 class="modal__contacts-title">Контактные данные для заказа:</h6>
        <p v-if="error || validationError" style="color: red; font-size: 12px margin-bottom:8px;">
          {{ error || validationError }}
        </p>
        <form class="modal__contacts-form" @submit.prevent="checkout">
          <input v-model="name" class="modal__contacts-name" type="text" placeholder="Введите Ваше ФИО" required />
          <input v-model="phone" @keydown="phonemask" minlength="17" id="phone-mask" class="modal__contacts-phone"
            type="text" placeholder="Введите Ваш номер телефона" required />
          <input v-model="email" class="modal__contacts-email" type="email" placeholder="Введите Ваш почтовый адрес"
            required />
          <template v-if="deliveryMethod === 'Доставка'">
            <input v-model="address" class="modal__contacts-adress" type="text" placeholder="Адрес доставки" required />
          </template>

          <div class="modal__bottom">
            <!-- <app-order-price @clickCheckoutButton="checkout" /> -->
            <div class="order__buttons">
              <button class="order__buttons-issue" type="submit">
                Оформить заказ
              </button>
              <button class="order__buttons-delete" @click.prevent="clearCart">
                Очистить корзину
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div v-if="responseMessage" class="modal__container">
      <p>{{ responseMessage }}</p>
    </div>

    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="" />
    </button>
  </div>
</template>

<script>
import IMask from 'imask'
import { mapState, mapActions, mapGetters } from 'vuex'
// import AppOrderPrice from '~/components/order/AppOrderPrice.vue'
import { actionTypes } from '~/store/order'
import { actionTypes as actionTypesCart } from '~/store/cart'

export default {
  name: 'AppModalProducts',
  components: {
    // AppOrderPrice,
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      address: '',
      validationError: null,
      isShowAddressInput: false,
      responseMessage: null,
    }
  },
  computed: {
    ...mapState('auth', ['isLoggedIn', 'user']),
    ...mapState('order', ['error']),
    ...mapState('cart', ['deliveryMethod', 'paymentMethod']),
    ...mapGetters('cart', ['totalProductCost', 'products',]),
  },
  mounted() {
    if (this.isLoggedIn) {
      this.name = this.user?.name
      this.phone = this.user?.phone
      this.email = this.user?.email
    }
    if (this.deliveryMethod === null) {
      this.isShowAddressInput = true
    } else {
      this.isShowAddressInput = false
    }
  },
  methods: {
    ...mapActions('order', { sendOrder: actionTypes.sendOrder }),
    ...mapActions('cart', { clearCart: actionTypesCart.clearCart }),
    close() {
      this.$emit('close')
    },
    checkout() {
      const data = {
        user_id: null,
        address: this.user?.address || this.address || 0,
        name: this.name,
        phone: this.phone,
        email: this.email,
        price: this.totalProductCost,
        bonus_waste: 0,
        delivery_type: this.deliveryMethod,
        payment_type: this.paymentMethod,
        cart_elements: this.products,
      }
      this.phonemask()
      this.sendOrder({ callBack: this.finishCheckout, ...data });
    },
    finishCheckout({ ...response }) {
      if (response.success) {
        this.responseMessage = 'Покупка прошла успешно!'
      }
    },
    phonemask() {
      IMask(
        document.getElementById('phone-mask'), {
        mask: '+{7} (000) 000-00-00'
      });
    }
  },
}
</script>
