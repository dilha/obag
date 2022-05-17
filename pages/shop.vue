<template>
  <div>
    <app-intro-arrow link="shop">
      <h3 class="intro__title intro__title-arrow">Магазины O bag KAZAKHSTAN</h3>
    </app-intro-arrow>
    <section class="shop" id="shop">
      <div v-if="items" class="container">
        <div class="shop__block page__block">
          <div class="shop__inner">
            <app-shop-cards v-for="(item, index) in items" :key="index" :shop="item" />
          </div>
        </div>
        <app-shop />
      </div>
    </section>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppShopCards from '~/components/cards/AppShopCards.vue'
import AppShop from '~/components/AppShop.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'ShopPage',
  components: {
    AppIntroArrow,
    AppNews,
    AppShopCards,
    AppShop,
  },
  mixins: [MetaSeo],
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
        this.items = res.data.affiliateStore
      })
    },
  },
}
</script>
