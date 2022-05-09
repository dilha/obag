<template>
  <div class="modal">
    <div class="modal__container">
      <h6 class="modal__edits-title">
        Изменить свой пароль
      </h6>
      <form class="modal__edits">
          <label for="name">Введите старый пароль</label>
          <input id="name" type="password" >
          <label for="email">Введите новый пароль</label>
          <input id="name" v-model="edit.newPassword" typte="password">
          <label for="email">Повторно введите новый пароль</label>
          <input id="name" v-model="edit.newPassword" type="password">
          <button class="page__border-btn" type="submit">
            Изменить
          </button>
      </form>
    </div>
    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppModalRegistration',
  data() {
    return {
      edit: {
        newPassword: '',
      },
    }
  },
  computed: {
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
