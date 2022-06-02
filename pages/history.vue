<template>
  <div v-if="content">
    <app-intro :item="content.main_image">
      <h3 v-if="content.main_title" class="intro__title">
        {{ content.main_title }}
      </h3>
    </app-intro>
    <section class="history">
      <div class="container">
        <div class="history__content">
          <h3 class="history__title page__title">
            {{ content.title_first }}
          </h3>

          <div class="history__text" style="white-space: pre-line">
            {{ content.text_first }}
          </div>
          <img class="history__img" :src="content.image_first" alt="" />
        </div>

        <div class="history__content">
          <h3 class="history__title page__title">
            {{ content.title_second }}
          </h3>
          <div class="history__text" style="white-space: pre-line">
            {{ content.text_second }}
          </div>
          <img class="history__img" :src="content.image_second" alt="" />
        </div>

        <div class="history__content">
          <div class="history__text" style="white-space: pre-line">
            {{ content.text_third }}
          </div>
          <img class="history__img" :src="content.images" alt="" />
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
      content: null,
    }
  },
  mounted() {
    this.getHistory()
  },
  methods: {
    getHistory() {
      this.$api.get('/history-and-mission').then((res) => {
        this.content = res.data
        console.log(this.content)
      })
    },
  },
}
</script>
