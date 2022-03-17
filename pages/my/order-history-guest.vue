<template>
  <div class="container">
    <h2>Заказ офрмлен без регистрации</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '~/store/profile'

export default {
  name: 'OrderHistory',
  computed: {
    ...mapState('profile', { orders: 'data' }),
  },
  created() {
    this.loadOrders()
  },
  methods: {
    ...mapActions('profile', { loadOrders: actionTypes.loadOrders }),
  },
}
</script>

<style lang="scss" scoped>
</style>
