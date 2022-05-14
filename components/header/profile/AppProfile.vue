<template>
  <div class="header__profile-item">
    <a class="header__profile header__link" @click.prevent="showProfile">
      Мой профиль
    </a>
    <app-modal-login
      v-if="!isLoggedIn & isVisibleLoginModal"
      @close="isVisibleLoginModal = false"
      @register="isVisibleRegisterModal = true"
    />
    <app-modal-register
      v-if="isVisibleRegisterModal"
      @close="isVisibleRegisterModal = false"
      @mounted="isVisibleLoginModal = false"
      @login="
        isVisibleRegisterModal = false
        isVisibleLoginModal = true
      "
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppModalLogin from '@/components/modal/AppModalogIn.vue'
import AppModalRegister from '@/components/modal/AppModalRegistration.vue'

export default {
  name: 'AppProfile',
  components: { AppModalLogin, AppModalRegister },
  data() {
    return {
      isVisibleLoginModal: false,
      isVisibleRegisterModal: false,
    }
  },
  computed: {
    ...mapState('auth', ['isLoggedIn']),
  },
  methods: {
    showProfile() {
      if (this.isLoggedIn) {
        this.$router.push('/account')
      } else {
        this.isVisibleLoginModal = true
      }
    },
  },
}
</script>
