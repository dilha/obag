<template>
  <div class="news page__block">
    <div class="container">
      <div class="news__top page__block-top">
        <h3 class="news__title page__title">Новости компании</h3>
        <a class="news__link page__block-link" href="#?">
          Смотреть все новости
        </a>
      </div>
      <div class="news__inner">
        <news-cards  v-for="item in items" :key="item.id" :item="item" />
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
import axios from 'axios'
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
  mounted() {
    axios
      .get('https://bag.a-lux.dev/api/page/get-news')
      .then((response) => (this.items = response.data.news))
  },
}
</script>