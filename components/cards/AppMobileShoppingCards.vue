<template>
  <seciton v-if="shops" class="shopping">
    <div class="container">
      <div class="shopping__inner inside__block">
        <div v-for="(shop, index) in shops" :key="index" class="shopping__item">
          <img class="shopping__item-img" :src="shop.image" alt="" />
          <h6 class="shopping__item-title">{{ shop.title }}</h6>
          <div class="shopping__item-bottom">
            <a class="shopping__item-link shopping__item-telegram" target="_blank" :href="shop.telegram">
              Telegram
            </a>
            <a v-if="shop.whatsapp" class="shopping__item-link shopping__item-viber" target="_blank" :href="`https://wa.me/${shop.whatsapp.replace(/\s+/g, '').slice(1)}`">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  </seciton>
</template>

<script>
export default {
  name: 'AppMobileShoppingCards',
  props: {
    shops: {
      type: Array,
      require: true,
    },
  },
}
</script>
