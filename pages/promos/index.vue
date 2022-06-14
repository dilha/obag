<template>
  <div>
    <app-intro-white-arrow link="promos">
      <h3 class="intro__title" data-aos="fade-right" data-aos-duration="700">
        Promos
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
      promos: null,
    }
  },
  created() {
    this.$axios.get('/page/sales').then((response) => {
      this.promos = response.data.news
    })
  },
}
</script>
