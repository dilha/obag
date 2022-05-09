<template>
  <div class="orders">
    <div class="container">
      <h1 class="orders__title page__title" @click="con">Бонусные баллы</h1>
      <div class="orders__inner">
        <profile-navigation />
        <div class="orders__points">
          <p class="orders__points-text">
            На вашем счету
            <span v-if="user">{{ user.bonus }}</span>
            бонусов.
          </p>
          <button class="orders__points-btn page__border-btn">
            Продолжить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '~/store/profile'
import ProfileNavigation from '~/components/my/ProfileNavigation.vue'

export default {
  name: 'OrderHistory',
  components: {
    ProfileNavigation,
  },
  computed: {
    ...mapState('profile', { orders: 'data' }),
    ...mapState('auth', ['user']),
  },
  created() {
    this.loadOrders()
  },
  methods: {
    ...mapActions('profile', { loadOrders: actionTypes.loadOrders }),
    con() {
      console.log(this.orders)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
