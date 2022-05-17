<template>
  <div v-if="content">
    <app-intro :item="content.image">
      <h3 class="intro__title">
        {{ content.title }}
      </h3>
    </app-intro>
    <div class="mission">
      <div class="container">
        <div class="mission__content" v-html="content.text"></div>
      </div>
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
    this.getMission()
  },
  methods: {
    getMission() {
      this.$api.get('/page/mission').then((res) => {
        this.content = res.data.content
        console.log(this.content)
      })
    },
  },
}
</script>
