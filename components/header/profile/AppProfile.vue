<template>
  <div>
    <a class="header__profile header__link" @click.prevent="showProfile">
      Мой профиль
    </a>
    <app-modal-login v-if="isLoggedIn" />
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import AppModalLogin from '@/components/modal/AppModalogIn.vue'

export default {
  name: 'AppProfile',
  components: { AppModalLogin },
  methods: {
    showProfile() {
      if (this.isLoggedIn) {
        this.route.push('/account')
      }
    },
  },
}
</script>
