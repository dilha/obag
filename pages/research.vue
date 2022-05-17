<template>
  <div>
    <app-intro-arrow link="research">
      <h3 class="intro__title intro__title-arrow">
        Исследования и инновации компании O bag
      </h3>
    </app-intro-arrow>
    <div v-if="content" class="research inside" id="research">
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
  name: 'ResearchPage',
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
      this.$api.get('/research-and-innovation').then((res) => {
        this.content = res.data
      })
    },
  },
}
</script>
