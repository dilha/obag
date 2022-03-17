<template>
  <div>
    <a class="header__profile header__link" @click.prevent="showProfile">
      Мой профиль
    </a>
    <app-modal-login
      v-if="!isLoggedIn & isVisibleLoginModal"
      @close="isVisibleLoginModal"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppModalLogin from '@/components/modal/AppModalogIn.vue'

export default {
  name: 'AppProfile',
  components: { AppModalLogin },
  computed: {
    ...mapState('auth', ['isLoggedIn']),
  },
  data() {
    return {
      isVisibleLoginModal: false,
    }
  },
  methods: {
    showProfile() {
      if (this.isLoggedIn) {
        this.route.push('/account')
      } else {
        this.isVisibleLoginModal = true
      }
    },
  },
}
</script>
