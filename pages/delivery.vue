<template>
  <div>
    <app-intro-arrow>
      <h3 class="intro__title intro__title-arrow">Доставка и оплата</h3>
    </app-intro-arrow>
    <div v-if="content" class="delivery inside">
      <div class="container" v-html="content.text"></div>
    </div>
    <app-news />
  </div>
</template>

<script>
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'DeliveryPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
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
      this.$api.get('/shipping-and-payment').then((res) => {
        this.content = res.data
      })
    },
  },
}
</script>


