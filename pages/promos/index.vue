<template>
  <div>
    <app-intro-white-arrow link="promos" :banner="introData.img_source">
      <h3 class="intro__title" data-aos="fade-right" data-aos-duration="700">
        {{ introData.headline }}
      </h3>
    </app-intro-white-arrow>
    <section v-if="promos" class="news page__block" id="promos">
      <div class="container">
        <div class="news__top page__block-top">
          <h3
            class="news__title page__title"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Акции компании
          </h3>
        </div>
        <div class="news__inner">
          <promos-card
            v-for="(item, index) in promos"
            :key="index"
            :item="item"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroWhiteArrow from '~/components/intro/AppIntroWhiteArrow.vue'
import PromosCard from '~/components/cards/PromosCard.vue'

export default {
  name: 'PromosPage',

  components: {
    AppIntroWhiteArrow,
    PromosCard,
  },

  mixins: [MetaSeo],

  data() {
    return {
      introData: {},
      promos: null,
    }
  },

  mounted() {
    this.loadBanners()
    this.loadSales()
  },

  methods: {
    async loadSales() {
      const response = await this.$axios.get('/page/sales')
      this.promos = response.data.news
    },

    async loadBanners() {
      const response = await this.$axios.get('/page/banners')
      this.introData = response.data.banners[0]
      console.log(this.introData)
    },
  },
}
</script>
