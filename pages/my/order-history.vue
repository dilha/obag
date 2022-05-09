<template>
  <div class="orders">
    <div class="container">
      <h1 class="orders__title page__title" @click="con">
        История заказов
      </h1>
      <div class="orders__inner">
        <profile-navigation />
        <app-history-cards v-if="orders" :items="orders"/>
        <!-- <ul v-if="orders">
          <li
            v-for="order in orders"
            :key="order.id"
            style="margin-bottom: 8px"
          >
            <strong>Заказа #{{ order.id }}</strong> сумма {{ order.price }}
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '~/store/profile'
import ProfileNavigation from '~/components/my/ProfileNavigation.vue'
import AppHistoryCards from '~/components/cards/AppHistoryCards.vue'

export default {
  name: 'OrderHistory',
  components: {
    ProfileNavigation,
    AppHistoryCards,
  },
  computed: {
    ...mapState('profile', { orders: 'data' }),
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
