<template>
  <div>
    <app-header />
    <Nuxt />
    <app-mail />
    <app-footer />
    <app-floating-widgets />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '~/components/header/AppHeader.vue'
import AppMail from '~/components/footer/AppMail.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import AppFloatingWidgets from '~/components/widgets/AppFloatingWidgets.vue'
import { actionTypes } from '~/store/auth'
import { actionTypes as bookmarkActionTypes } from '~/store/bookmarks'

export default {
  components: {
    AppHeader,
    AppMail,
    AppFooter,
    AppFloatingWidgets,
  },

  mounted() {
    console.log('ROUTE', this.$route, this.$nuxt.$children)

    this.updateIsLoggedIn()
    if (this.isLoggedIn) {
      this.loadFavorites()
    }
    const token = this.$route?.query?.token
    if (token) {
      this.$api
        .get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data)
          this.googleLogin({ token, user: response.data })
        })
    }
  },
  methods: {
    ...mapActions('auth', {
      updateIsLoggedIn: actionTypes.updateIsLoggedIn,
      googleLogin: actionTypes.googleLogin,
    }),
    ...mapActions('bookmarks', {
      loadFavorites: bookmarkActionTypes.loadFavorites,
    }),
  },
}
</script>
