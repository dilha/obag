<template>
  <div>
    <app-intro-button v-if="banner" :image="banner.image" />
    <app-season v-if="mainSale" :items="mainSale" />
    <app-like />
    <app-mid-flash />
    <app-insta />
    <app-news />
  </div>
</template>

<script>
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppSeason from '~/components/main/AppSeason.vue'
import AppLike from '~/components/AppLike.vue'
import AppMidFlash from '~/components/main/AppMidFlash.vue'
import AppInsta from '~/components/main/AppInsta.vue'
import AppNews from '~/components/news/AppNews.vue'
export default {
  name: 'IndexPage',
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
      modalShow: false,
      banner: null,
      mainSale: null,
    }
  },
  mounted() {
    this.getBanner()
    this.getMainSale()
  },
  methods: {
    getBanner() {
      this.$api.get('/index').then((res) => {
        this.banner = res.data.banner
      })
    },
    getMainSale() {
      this.$api.get('/index').then((res) => {
        this.mainSale = res.data.mainSale
      })
    },
    show() {
      this.modalShow = true
    },
    close() {
      this.modalShow = false
    },
  },
}
</script>
