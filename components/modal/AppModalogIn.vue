<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__login">
          <h6 class="modal__login-title">
            Вход в аккаунт
          </h6>
          <form class="modal__login-form">
              <input class="modal__login-input modal__login-email" type="text" placeholder="Эл. почта">
              <input class="modal__login-input modal__login-password" type="password" placeholder="Пароль">
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
  name: 'AppModalLogIn',
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>