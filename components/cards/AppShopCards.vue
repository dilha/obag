<template>
  <div class="shop__item">
    <img class="shop__item-img" :src="shop.img" alt="">
    <h6 class="shop__item-title">
      {{shop.title}}
    </h6>
    <div class="shop__item-content">
      <p class="shop__item-text">
        <span>Адрес:</span>
        {{shop.address}}
      </p>
      <p class="shop__item-text">
        <span>Телефон:</span>
        {{shop.phone}}
      </p>
      <p class="shop__item-text">
        <span>График работы:</span>   
        {{shop.work}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppShopCards",
  props: {
      shop: {
        type: Object,
        require: true,
      },
  },
}
</script>