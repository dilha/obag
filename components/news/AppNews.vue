<template>
  <div class="news page__block">
    <div class="container">
      <div class="news__top page__block-top">
        <h3
          class="news__title page__title"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          Новости компании
        </h3>
        <nuxt-link class="news__link page__block-link" to="/all-news">
          Смотреть все новости
        </nuxt-link>
      </div>
      <div v-if="news.length" class="news__inner">
        <news-cards
          v-for="item in blockNews"
          :key="item.title"
          :item="item"
          data-aos="flip-left"
          data-aos-duration="700"
        />
      </div>
      <div class="news__button">
        <nuxt-link
          class="news__btn page__border-btn"
          to="/all-news"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          Смотреть все новости
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { actionTypes } from '@/store'
import NewsCards from '~/components/news/NewsCards.vue'
export default {
  name: 'AppNews',
  components: {
    NewsCards,
  },
  computed: {
    ...mapState(['news']),
    ...mapGetters(['blockNews']),
  },
  methods: {
    ...mapActions({ getNews: actionTypes.loadNews }),
  },
  mounted() {
    this.getNews()
  },
}
</script>
