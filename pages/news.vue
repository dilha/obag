<template>
    <div>
        <app-intro-white-arrow>
            <h3 class="intro__title">
                Promo / News
            </h3>
        </app-intro-white-arrow>
        <section class="news page__block">
            <div class="container">
                <div class="news__top page__block-top">
                    <h3 class="news__title page__title">
                        Новости компании
                    </h3>
                </div>
                <div class="news__inner">
                    <news-cards v-for="(item, index) in news" :key="index" :item="item" />
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import{actionTypes} from '@/store';
import AppIntroWhiteArrow from "~/components/intro/AppIntroWhiteArrow.vue";
import NewsCards from "~/components/news/NewsCards.vue";
export default {
  name: 'NewsPage',
  components: {
    AppIntroWhiteArrow,
    NewsCards,
  },
  computed: {
    ...mapState([
      'news'
    ]),
  },
  mounted() {
    this.getNews()
  },
  methods: {
    ...mapActions({getNews:actionTypes.loadNews}),
  },
  
}
</script>
