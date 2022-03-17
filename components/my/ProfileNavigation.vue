<template>
  <ul class="account__sidebar">
    <li>
      <p class="account__title">Мои заказы</p>
    </li>
    <li>
      <a class="account__link" href="#?"> Личный кабинет </a>
    </li>
    <li>
      <nuxt-link to="/my/order-history" class="account__link">
        История заказа
      </nuxt-link>
    </li>
    <li>
      <a class="account__link" href="#?"> Бонусные баллы </a>
    </li>
    <li>
      <a class="account__link" href="#?"> Рассылка </a>
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

