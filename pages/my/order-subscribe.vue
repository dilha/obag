<template>
  <div class="orders">
    <div class="container">
      <h1 class="orders__title page__title" @click="con">
        Подписка на новости
      </h1>
      <div class="orders__inner orders__subscribe-inner">
        <profile-navigation />
        <div class="orders__subscribe">
          <div class="orders__subscribe-content">
              <p>Подписаться</p>
              <form class="orders__subscribe-form">
                <div class="orders__subscribe-radiobox">
                  <input id="yes" class="orders__subscribe-radio" type="radio" name="subscribe">
                  <label class="orders__subscribe-label" for="yes">Да</label>
                </div>
                <div class="orders__subscribe-radiobox">
                  <input id="no" class="orders__subscribe-radio" type="radio" name="subscribe" >
                  <label class="orders__subscribe-label" for="no">Нет</label>
                </div>
                  
                  
              </form>
          </div>
          <div class="orders__subscribe-buttons">
            <button class="orders__subscribe-btn page__border-btn">
              Назад
            </button>
            <button class="orders__subscribe-btn orders__subscribe-proceed">
              Продолжить
            </button>
          </div>
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
