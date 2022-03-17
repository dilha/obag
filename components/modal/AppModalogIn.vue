<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__login">
        <h6 class="modal__login-title">Вход в аккаунт</h6>
        <p v-if="error" style="color: red; font-size: 12px margin-bottom:8px;">
          {{ error }}
        </p>
        <form class="modal__login-form">
          <input
            v-model="user.phone"
            class="modal__login-input modal__login-email"
            type="text"
            placeholder="Эл. почта"
            autocomplete="false"
          />
          <input
            v-model="user.password"
            class="modal__login-input modal__login-password"
            type="password"
            placeholder="Пароль"
            autocomplete="false"
          />
          <button class="modal__login-btn" @click.prevent="userLogin">
            Войти
          </button>
        </form>
        <div class="modal__login-link">
          <a class="modal__login-register" href="#?"> Зарегистрироваться </a>
          <a class="modal__login-forgot" href="#?"> Забыли пароль? </a>
        </div>
      </div>
    </div>
    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="" />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '@/store/auth'

export default {
  name: 'AppModalLogIn',
  data() {
    return {
      user: {
        phone: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapState('auth', ['error']),
  },
  methods: {
    ...mapActions('auth', { login: actionTypes.login }),
    close() {
      this.$emit('close')
    },
    userLogin() {
      this.login(this.user).then(() => {
        this.$router.push('/account')
      })
    },
  },
}
</script>
