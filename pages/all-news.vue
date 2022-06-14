<template>
  <div>
    <app-intro-white-arrow link="news">
      <h3 class="intro__title" data-aos="fade-right" data-aos-duration="700">
        Promo / News
      </h3>
    </app-intro-white-arrow>
    <section class="news page__block" id="news">
      <div class="container">
        <div class="news__top page__block-top">
          <h3
            class="news__title page__title"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Новости компании
          </h3>
        </div>
        <div class="news__inner">
          <news-cards
            v-for="(item, index) in news"
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
import { mapActions, mapState } from 'vuex'
import MetaSeo from '@/mixins/MetaSeo.vue'
import { actionTypes } from '@/store'
import AppIntroWhiteArrow from '~/components/intro/AppIntroWhiteArrow.vue'
import NewsCards from '~/components/news/NewsCards.vue'
export default {
  name: 'NewsPage',
  components: {
    AppIntroWhiteArrow,
    NewsCards,
  },
  mixins: [MetaSeo],
  computed: {
    ...mapState(['news']),
  },
  mounted() {
    this.getNews()
  },
  methods: {
    ...mapActions({ getNews: actionTypes.loadNews }),
  },
}
</script>
