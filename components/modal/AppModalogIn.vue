<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__login">
        <div class="modal__login-social">
          <a
            class="modal__login-google"
            href="https://accounts.google.com/o/oauth2/auth?client_id=568022369523-k07ed3jvobenv0gcue86e41irklim4k8.apps.googleusercontent.com&redirect_uri=http%3A%2F%2F127.0.0.1%3A8001%2Fapi%2Fgoogle-callback&scope=openid+profile+email&response_type=code&state=E2CD8aRsHA7qRFH4EzG2I3Ibj2xyu0hyfE6KYZbK"
          >
            <img src="@/assets/images/icons/google.svg" alt="" /> Google
          </a>
          <!-- <button class="modal__login-facebook">
            <img src="@/assets/images/icons/facebook-white.svg" alt="" />
            Facebook
          </button>
   -->
        </div>
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
          <a class="modal__login-register" href="#?" @click="$emit('register')">
            Зарегистрироваться
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
