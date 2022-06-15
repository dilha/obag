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
          v-html="item.text"
        ></div>
      </div>
    </section>
    <app-sales :products="item.products" />
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntro from '~/components/intro/AppIntro.vue'
import AppNews from '~/components/news/AppNews.vue'
import AppSales from '~/components/AppSales.vue'

export default {
  name: 'CollectionPage',
  components: {
    AppIntro,
    AppNews,
    AppSales,
  },
  mixins: [MetaSeo],
  data() {
    return {
      item: null,
    }
  },
  created() {
    if (this.$route?.params?.id) {
      this.getPromo(this.$route?.params?.id)
    }
  },
  methods: {
    getPromo(id) {
      this.$api.get(`/page/sales/${id}`).then((res) => {
        this.item = res.data
      })
    },
  },
}
</script>
