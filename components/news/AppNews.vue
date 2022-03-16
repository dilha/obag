<template>
  <div class="news page__block">
    <div class="container">
      <div class="news__top page__block-top">
        <h3 class="news__title page__title">Новости компании</h3>
        <a class="news__link page__block-link" href="#?">
          Смотреть все новости
        </a>
      </div>
      <div  v-if="news.length"  class="news__inner">
        <news-cards  v-for="item in news" :key="item.title" :item="item" />
      </div>
      <div class="news__button">
        <a class="news__btn page__border-btn" href="#?">
          Смотреть все новости
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import {mapActions, mapState} from 'vuex'
import{actionTypes} from '@/store';
import NewsCards from '~/components/news/NewsCards.vue'
export default {
  name: 'AppNews',
  components: {
    NewsCards,
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    ...mapState([
      'news'
    ]),
  },
  methods: {
    ...mapActions({getNews:actionTypes.loadNews}),
  },
  mounted() {
    this.getNews()
  }
}
</script>