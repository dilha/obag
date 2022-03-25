<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__login">
        <div class="modal__login-social">
          <a
            class="modal__login-google"
            :href="googleAccount"
          >
            <img src="@/assets/images/icons/google.svg" alt="" />oogle
          </a>
          <!-- <button class="modal__login-facebook">
            <img src="@/assets/images/icons/facebook-white.svg" alt="" />
            Facebook
          </button>
   -->
        </div>
        <h6 class="modal__login-title" @click="con">Вход в аккаунт</h6>
        <p v-if="error" style="color: red; font-size: 12px margin-bottom:8px;">
          {{ error }}
        </p>
        <form class="modal__login-form">
          <input
            v-model="user.phone"
            class="modal__login-input modal__login-phone"
            type="number"
            placeholder="Телефон"
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
      googleUser: null,
    }
  },
  computed: {
    ...mapState('auth', ['error', 'googleAccount']),
  },
  mounted(){
    this.loginGoogleAccount()
  },
  methods: {
    ...mapActions('auth', { login: actionTypes.login }),
    ...mapActions('auth', { loginGoogleAccount: actionTypes.googleAction }),
    close() {
      this.$emit('close')
    },
    userLogin() {
      this.login(this.user).then(() => {
        this.$router.push('/account')
      })
    },
    getGoogleAccount() {
      this.loginGoogleAccount(this.googleUser).then(() => {
        this.$router.push('/account')
      })
    },
    con() {
      console.log(this.googleUser)
    }
  },
}
</script>
