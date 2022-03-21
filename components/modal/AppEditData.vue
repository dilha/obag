<template>
  <div class="modal">
    <div class="modal__container">
      <h6 class="modal__edits-title">
        Редактировать данные
      </h6>
      <form class="modal__edits">
          <label for="name">Имя Фамилия:</label>
          <input id="name" v-model="edit.name" type="text" :placeholder="user.name">
          <label for="email">Email:</label>
          <input id="name" v-model="edit.email" type="email" :placeholder="user.email">
          <label for="phone">Телефон:</label>
          <input id="name" v-model="edit.phone" type="number" :placeholder="user.phone">
          <label for="date">Дата рождения:</label>
          <input id="name" v-model="edit.date" type="text" :placeholder="user.date_of_birth">
          <label for="address">Адрес</label>
          <input id="name" v-model="edit.address" type="text" :placeholder="user.address">
          <button class="page__border-btn" @click="getEdits">
            Редактировать
          </button>
      </form>
      
    </div>
    <button class="modal__close" @click="close">
      <img src="@/assets/images/icons/close-modal.svg" alt="editData" />
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
      edit: {
        name: '',
        phone: '',
        email: '',
        date: '',
        address: '',
      },
    }
  },
  computed: {
    ...mapState('auth', ['user', 'isLoggedIn']),
  },
  methods: {
    ...mapActions('auth', {getEdits:actionTypes.editAction}),

    close() {
      this.$emit('close')
    },

    editData() {
      this.getEdits(this.edit)
      // console.log(this.edit.name)
    },
  },
}
</script>
