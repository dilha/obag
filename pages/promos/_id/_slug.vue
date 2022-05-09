<template>
  <div v-if="item">
    <app-intro :item="item.image">
      <h3 class="intro__title">
        {{ item.title }}
      </h3>
    </app-intro>
    <section class="news__id">
      <div class="container">
        <div class="news__id-content">
          {{ item.text }}
          {{ item.second_title }}
          {{ item.second_subtitle }}
          {{ item.second_text }}
          {{ item.third_title }}
          {{ item.third_subtitle }}
          {{ item.third_text }}
        </div>
      </div>
    </section>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntro from '~/components/intro/AppIntro.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'CollectionPage',
  components: {
    AppIntro,
    AppNews,
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
