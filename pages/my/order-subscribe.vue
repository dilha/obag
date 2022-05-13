<template>
  <div class="orders">
    <div class="container">
      <h1 class="orders__title page__title">Подписка на новости</h1>
      <div class="orders__inner orders__subscribe-inner">
        <profile-navigation />
        <div class="orders__subscribe">
          <p v-if="subscribeStatus">
            {{ isSubscribe ? 'Вы подписались' : 'Вы отписались' }}
          </p>
          <div class="orders__subscribe-content">
            <p>Подписаться</p>
            <form class="orders__subscribe-form">
              <div class="orders__subscribe-radiobox">
                <input
                  v-model="isSubscribe"
                  id="yes"
                  class="orders__subscribe-radio"
                  type="radio"
                  :checked="isSubscribe"
                  name="subscribe"
                  value="subscribe"
                />
                <label class="orders__subscribe-label" for="yes">Да</label>
              </div>
              <div class="orders__subscribe-radiobox">
                <input
                  v-model="isSubscribe"
                  id="no"
                  class="orders__subscribe-radio"
                  type="radio"
                  name="subscribe"
                  :checked="isSubscribe"
                  value="unsubscribe"
                />
                <label class="orders__subscribe-label" for="no">Нет</label>
              </div>
            </form>
          </div>
          <div class="orders__subscribe-buttons">
            <button class="orders__subscribe-btn page__border-btn">
              Назад
            </button>
            <button
              class="orders__subscribe-btn orders__subscribe-proceed"
              @click="subscribe"
            >
              Продолжить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProfileNavigation from '~/components/my/ProfileNavigation.vue'

export default {
  name: 'UserSubscribe',
  components: {
    ProfileNavigation,
  },
  data() {
    return {
      isSubscribe: true,
      subscribeStatus: false,
      unsubscribeStatus: false,
    }
  },

  computed: {
    ...mapState('auth', ['user']),
  },

  methods: {
    subscribe() {
      switch (this.isSubscribe) {
        case 'subscribe':
          this.$api
            .post('/subscription', { email: this.user.email })
            .then(() => {
              this.subscribeStatus = true
            })
          return
        case 'unsubscribe':
          this.$api
            .delete('/subscription', { email: this.user.email })
            .then(() => {
              this.subscribeStatus = false
            })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
