<template>
  <nuxt-link to="/basket" class="header__basket header__link">
    <span class="header__number header__basket--number">{{
      $store.getters['cart/totalProductCount']
        ? $store.getters['cart/totalProductCount']
        : 0
    }}</span>
    Корзина
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppBasket',
}
</script>
