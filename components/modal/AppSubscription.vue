<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__login">
        <h6 class="modal__login-title">
          Подписаться на рассылку
        </h6>
        <p v-if="error" style="color: red; font-size: 12px margin-bottom:8px;">
          {{ error }}
        </p>
        <form class="modal__login-form" @submit.prevent="subscription">
          <input
            v-model="user.email"
            class="modal__login-input modal__login-email"
            type="email"
            placeholder="Эл. почта"
            required
          />
          <button class="modal__login-btn" type="submit">
            Подписаться
          </button>
        </form>
      </div>
    </div>
    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="" />
    </button>
  </div>
</template>

<script>

export default {
  name: 'AppSubscription',
  data() {
    return {
      user: {
        email: '',
      },
    }
  },
  mounted() {
    this.$emit('mounted')
  },
  methods: {
    close() {
      this.$emit('close')
    },
    subscription() {
      this.$api.post('/subscription', this.user).then(() => {
        // TODO set user data, now don't get from api user data
        this.$emit('close')
      })
    }
  },
}
</script>
