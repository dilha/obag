<template>
  <ul class="account__sidebar">
    <li>
      <p class="account__title">Мои заказы</p>
    </li>
    <li>
      <nuxt-link to="/account" class="account__link"> Личный кабинет </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/my/order-history" class="account__link">
        История заказа
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/my/order-points" class="account__link"> Бонусные баллы </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/my/order-subscribe" class="account__link"> Рассылка </nuxt-link>
    </li>
    <li>
      <a class="account__link" @click.prevent="logout"> Выход </a>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '~/store/auth'

export default {
  name: 'ProfileNavigation',
  methods: {
    ...mapActions('auth', { logout: actionTypes.logout }),
    // logout(){
    //   this.logoutAction().then((response)=>{
    //       resp
    //   })
    // }
  },
}
</script>

