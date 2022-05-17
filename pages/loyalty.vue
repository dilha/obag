<template>
  <div>
    <app-intro-arrow link="loyalty">
      <h3 class="intro__title intro__title-arrow">
        Система лояльности от компании O bag KAZAKHSTAN
      </h3>
    </app-intro-arrow>
    <div v-if="content" class="loyalty" id="loyalty">
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
  name: 'LoyaltyPage',
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
      this.$api.get('/loyalty-system').then((res) => {
        this.content = res.data
      })
    },
  },
}
</script>


