<template>
  <div class="container">
    <ul v-if="orders">
      <li v-for="order in orders" :key="order.id" style="margin-bottom: 8px">
        <strong>Заказа #{{ order.id }}</strong> сумма {{ order.price }}
      </li>
    </ul>
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
