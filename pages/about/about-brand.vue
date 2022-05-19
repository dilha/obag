<template>
  <div v-if="content">
    <app-intro-arrow link="about-brand">
      <h3 class="intro__title intro__title-arrow">
        {{ content.title }}
      </h3>
    </app-intro-arrow>
    <div id="about-brand" class="about__brand">
      <div class="container">
        <div class="about__brand-text" v-html="content.text"></div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'MissionPage',
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
    this.getBrand()
  },
  methods: {
    getBrand() {
      this.$api.get('/page/brand-info').then((res) => {
        this.content = res.data.content
      })
    },
  },
}
</script>
