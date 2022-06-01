<template>
  <div>
    <app-intro-arrow link="warranty">
      <h3 class="intro__title intro__title-arrow">
        Гарантия на товары O bagПравила использования подарочных сертификатов
      </h3>
    </app-intro-arrow>
    <div v-if="content" class="warranty inside" id="warranty">
      <div class="container" v-html="content.content"></div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'WarrantyPage',
  components: {
    AppIntroArrow,
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
      this.$api.get('/guarantee').then((res) => {
        this.content = res.data
      })
    },
  },
}
</script>
