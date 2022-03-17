<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__login">
        <h6 class="modal__login-title">Регистрация</h6>
        <!-- <div class="modal__login-social">
          <button class="modal__login-google">
            <img src="@/assets/images/icons/google.svg" alt="" /> Google
          </button>
          <button class="modal__login-facebook">
            <img src="@/assets/images/icons/facebook-white.svg" alt="" />
            Facebook
          </button>
        </div> -->
        <p v-if="error" style="color: red; font-size: 12px margin-bottom:8px;">
          {{ error }}
        </p>

        <form class="modal__login-form" @submit.prevent="registration">
          <input
            v-model="user.name"
            class="modal__login-input modal__login-name"
            type="text"
            placeholder="ФИО"
            required
          />
          <input
            v-model="user.email"
            class="modal__login-input modal__login-email"
            type="email"
            placeholder="Эл. почта"
            required
          />
          <input
            v-model="user.password"
            class="modal__login-input modal__login-password"
            type="password"
            placeholder="Пароль"
            required
          />
          <input
            v-model="user.phone"
            class="modal__login-input modal__login-phone"
            type="number"
            placeholder="Ваш телефон"
            required
          />
          <button class="modal__login-btn" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <div class="modal__login-link">
          <a class="modal__login-register" href="#" @click="$emit('login')">
            Войти
          </a>
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
import { actionTypes } from '~/store/auth'

export default {
  name: 'AppModalRegistration',
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  computed: {
    ...mapState('auth', ['error']),
  },
  mounted() {
    this.$emit('mounted')
  },
  methods: {
    ...mapActions('auth', { register: actionTypes.register }),
    close() {
      this.$emit('close')
    },
    registration() {
      this.user.password_confirmation = this.user.password
      this.register(this.user).then(() => {
        this.$emit('close')
      })
      // this.$emit('register')
    },
  },
}
</script>
