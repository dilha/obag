<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__login">
          <h6 class="modal__login-title">
            Регистрация
          </h6>
          <div class="modal__login-social">
            <button class="modal__login-google">
              <img src="@/assets/images/icons/google.svg" alt=""> Google
            </button>
            <button class="modal__login-facebook">
              <img src="@/assets/images/icons/facebook-white.svg" alt=""> Facebook
            </button>
          </div>
          <form class="modal__login-form">
              <input class="modal__login-input modal__login-name" type="text" placeholder="ФИО">
              <input class="modal__login-input modal__login-email" type="text" placeholder="Эл. почта">
              <input class="modal__login-input modal__login-password" type="password" placeholder="Пароль">
              <input class="modal__login-input modal__login-phone" type="number" placeholder="Ваш телефон">
              <button class="modal__login-btn">
                    Войти
              </button>
          </form>
          <div class="modal__login-link">
              <a class="modal__login-register" href="#?">
                  Зарегистрироваться
              </a>
              <a class="modal__login-forgot" href="#?">
                  Забыли пароль?
              </a>
          </div>
      </div>
    </div>
    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="" />
    </button>
  </div>
</template>

<script>

export default {
  name: 'AppModalRegistration',
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>