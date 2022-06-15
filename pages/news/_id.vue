<template>
  <div v-if="item">
    <app-intro :item="item.image">
      <h3 class="intro__title" data-aos="fade-right" data-aos-duration="700">
        {{ item.title }}
      </h3>
    </app-intro>
    <section class="news__id">
      <div class="container">
        <div
          class="news__id-content"
          data-aos="fade-right"
          data-aos-duration="700"
          v-html="item.second_title"
        ></div>
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
        .get(`https://api.obagofficial.kz/api/page/get-news/${id}`)
        .then((res) => {
          this.item = res.data
        })
    },
  },
}
</script>
