<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__top">
        <h5 class="modal__top-title">Ваш заказ:</h5>
      </div>
      <div class="modal__contacts">
        <h6 class="modal__contacts-title">Контактные данные для заказа:</h6>
        <form class="modal__contacts-form">
          <input
            class="modal__contacts-name"
            type="text"
            placeholder="Введите Ваше ФИО"
          />
          <input
            class="modal__contacts-name"
            type="number"
            placeholder="Введите Ваш номер телефона"
          />
          <input
            class="modal__contacts-name"
            type="email"
            placeholder="Введите Ваш почтовый адрес"
          />
        </form>
      </div>
      <div class="modal__bottom">
        <app-order-price />
      </div>
    </div>
    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="" />
    </button>
  </div>
</template>

<script>
import AppOrderPrice from '~/components/order/AppOrderPrice.vue'

export default {
  name: 'AppModalProducts',
  components: {
    AppOrderPrice,
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>