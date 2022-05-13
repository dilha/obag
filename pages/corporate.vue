<template>
  <div>
    <app-intro bg-img="assets/images/intro/corporate-intro.jpg">
      <h3 class="intro__title">Информация корпоративным клиентам</h3>
    </app-intro>
    <div v-if="content" class="loyalty">
      <div class="container" v-html="content.content"></div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntro from '~/components/intro/AppIntro.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'MissionPage',
  components: {
    AppIntro,
    AppNews,
  },
  mixins: [MetaSeo],
  data() {
    return {
      content: null,
    }
  },
  mounted() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.$api.get('/information_for_corporate_clients').then((res) => {
        this.content = res.data
      })
    },
  },
}
</script>
