<template>
  <div class="container">
    <h2>Заказ офрмлен</h2>
    <h4>Статус {{ $route.query.status === '1' ? 'Оплачен' : 'Неоплачен' }}</h4>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '~/store/profile'

export default {
  name: 'OrderHistory',
  computed: {
    ...mapState('auth', { orders: 'isLoggedIn' }),
    ...mapState('profile', { orders: 'data' }),
  },
  created() {
    if (this.isLoggedIn) {
      this.loadOrders()
    }
  },
  methods: {
    ...mapActions('profile', { loadOrders: actionTypes.loadOrders }),
  },
}
</script>

<style lang="scss" scoped>
</style>
