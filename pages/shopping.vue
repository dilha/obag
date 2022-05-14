<template>
  <div>
    <app-intro-arrow>
      <h3 class="intro__title intro__title-arrow">Мобильный шопинг</h3>
    </app-intro-arrow>
    <div v-if="content" class="shopping inside">
      <div class="container" v-html="content.text"></div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'ShoppingPage',
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
      this.$api.get('/mobile-shopping').then((res) => {
        this.content = res.data
      })
    },
  },
}
</script>
