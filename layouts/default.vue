<template>
  <div>
    <app-header />
    <Nuxt />
    <app-mail />
    <app-footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '~/components/header/AppHeader.vue'
import AppMail from '~/components/footer/AppMail.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import { actionTypes } from '~/store/auth'
import { actionTypes as bookmarkActionTypes } from '~/store/bookmarks'

export default {
  components: {
    AppHeader,
    AppMail,
    AppFooter,
  },
  computed: {
    ...mapState('auth', ['isLoggedIn']),
  },
  mounted() {
    this.updateIsLoggedIn()
    if (this.isLoggedIn) {
      this.loadFavorites()
    }
  },
  methods: {
    ...mapActions('auth', { updateIsLoggedIn: actionTypes.updateIsLoggedIn }),
    ...mapActions('bookmarks', {
      loadFavorites: bookmarkActionTypes.loadFavorites,
    }),
  },
}
</script>
