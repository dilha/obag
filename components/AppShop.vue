<template>
  <div class="shop__block">
    <h3 class="shop__title page__title">Партнерские магазины</h3>
    <div class="shop__inner">
      <app-shop-cards v-for="item in items" :key="item.title" :shop="item" />
    </div>
  </div>
</template>

<script>
import AppShopCards from '~/components/cards/AppShopCards.vue'

export default {
  name: 'AppLike',
  components: {
    AppShopCards,
  },
  data() {
    return {
      items: null,
    }
  },
  mounted() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.$api.get('/shops').then((res) => {
        this.items = res.data.storeKazakhstan
      })
    },
  },
}
</script>
