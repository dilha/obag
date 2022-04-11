<template>
    <div v-if="item">
        <app-intro :item="item.image"> 
          <h3 class="intro__title">
              {{item.title}}
          </h3>
        </app-intro>
        <section class="news__id">
          <div class="container">
            <div class="news__id-content">
              {{item.text}}
            </div>
          </div>
        </section>
        <app-news />
    </div>
</template>

<script>
import AppIntro from "~/components/intro/AppIntro.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'CollectionPage',
  components: {
    AppIntro,
    AppNews,
  },
   data() {
    return {
       content: null,
       item: null
    }
  },
  mounted() {
    this.getNews()
    if (this.$route?.params?.id) {
      this.getNews(this.$route?.params?.id)
    }
  },
  methods: {
    getNews(id) {
      this.$api
      .get(`https://bag.a-lux.dev/api/page/get-news/news/${id}`)
      .then((res)=> {
        this.item = res.data.content
      })
    }
  }
}
</script>
