<template>
  <div v-if="item">
    <app-intro :item="item.image">
      <h3 class="intro__title">
        {{ item.title }}
      </h3>
    </app-intro>
    <section class="news__id">
      <div class="container">
        <div class="news__id-content">
          {{ item.text }}
          {{ item.second_title }}
          {{ item.second_subtitle }}
          {{ item.second_text }}
          {{ item.third_title }}
          {{ item.third_subtitle }}
          {{ item.third_text }}
        </div>
      </div>
    </section>
    <app-news />
  </div>
</template>

<script>
import AppIntro from '~/components/intro/AppIntro.vue'
import AppNews from '~/components/news/AppNews.vue'
// import NewsCards from "~/components/news/NewsCards.vue";

export default {
  name: 'CollectionPage',
  components: {
    // NewsCards,
    AppIntro,
    AppNews,
  },
  data() {
    return {
      content: null,
      item: null,
    }
  },
  mounted() {
    // this.getNews()
    if (this.$route?.params?.id) {
      this.getNews(this.$route?.params?.id)
    }
  },
  methods: {
    getNews(id) {
      this.$api
        .get(`https://bag.a-lux.dev/api/page/get-news/${id}`)
        .then((res) => {
          this.item = res.data
        })
    },
  },
}
</script>
