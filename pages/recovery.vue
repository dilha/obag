<template>
  <div>
    <app-intro-arrow link="recovery">
      <h3
        class="intro__title intro__title-arrow"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        Как осуществить возврат продукции O bag
      </h3>
    </app-intro-arrow>
    <div v-if="content" class="recovery inside" id="recovery">
      <div
        class="container"
        v-html="content.content"
        data-aos="fade-right"
        data-aos-duration="700"
      ></div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'RecoveryPage',
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
      this.$api.get('/return-information').then((res) => {
        this.content = res.data
      })
    },
  },
}
</script>
