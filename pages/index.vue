<template>
  <div>
    <app-intro-button v-if="banner" :image="banner.image" />
    <app-season v-if="mainSale" :items="mainSale" />
    <app-like />
    <app-mid-flash v-if="otherSales" :items="otherSales" />
    <app-insta />
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppSeason from '~/components/main/AppSeason.vue'
import AppLike from '~/components/AppLike.vue'
import AppMidFlash from '~/components/main/AppMidFlash.vue'
import AppInsta from '~/components/main/AppInsta.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'IndexPage',
  mixins: [MetaSeo],
  components: {
    AppIntroButton,
    AppSeason,
    AppLike,
    AppMidFlash,
    AppInsta,
    AppNews,
  },
  data() {
    return {
      banner: null,
      mainSale: null,
      otherSales: null,
    }
  },
  mounted() {
    this.getPageData()
  },
  methods: {
    getPageData() {
      this.$api.get('/index').then((res) => {
        this.banner = res.data.banner
        this.mainSale = res.data.mainSale
        this.otherSales = res.data.sales
      })
    },
  },
}
</script>
