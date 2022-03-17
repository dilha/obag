<template>
  <section v-if="isLoggedIn" class="account">
    <div class="container">
      <h3 class="page__title">Моя учетная запись</h3>
      <div class="account__inner">
        <profile-navigation />
        <div class="account__info">
          <div class="account__info-name">
            <p class="account__title">Имя Фамилия:</p>
            <p class="account__text">{{ user.name }}</p>
          </div>
          <div class="account__info-email">
            <p class="account__title">Email:</p>
            <p class="account__text">{{ user.email }}</p>
          </div>
          <div class="account__info-phone">
            <p class="account__title">Телефон:</p>
            <p class="account__text">{{ user.phone }}</p>
          </div>
          <div class="account__info-date">
            <p class="account__title">Дата рождения:</p>
            <p class="account__text">{{ user.date_of_birth }}</p>
          </div>
          <div class="account__info-address">
            <p class="account__title">Адрес</p>
            <p class="account__text">{{ user.address }}</p>
          </div>
          <div class="account__info-link">
            <a class="account__link" href="#?"> Редактировать данные </a>
            <a class="account__link" href="#?"> Изменить свой пароль </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProfileNavigation from '@/components/my/ProfileNavigation.vue'

export default {
  name: 'AccountPage',
  components: { ProfileNavigation },
  computed: {
    ...mapState('auth', ['user', 'isLoggedIn']),
  },
}
</script>
