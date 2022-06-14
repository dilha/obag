<template>
  <div v-if="content">
    <app-intro :item="content.main_image">
      <h3
        v-if="content.main_title"
        class="intro__title"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        {{ content.main_title }}
      </h3>
    </app-intro>
    <div class="mission">
      <div class="container">
        <div class="mission__content">
          <h3
            class="mission__title page__title"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.title_first }}
          </h3>
          <p
            class="mission__text"
            style="white-space: pre-line"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.text_first }}
          </p>
        </div>
        <div class="mission__content">
          <h3
            class="mission__title page__title"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.title_second }}
          </h3>
          <p
            class="mission__text"
            style="white-space: pre-line"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.text_second }}
          </p>
          <img
            class="mission__img"
            :src="content.image_first"
            alt=""
            data-aos="fade-right"
            data-aos-duration="700"
          />
        </div>
        <div class="mission__content">
          <h3
            class="mission__title page__title"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.title_third }}
          </h3>
          <p
            class="mission__text"
            style="white-space: pre-line"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.text_third }}
          </p>
          <img
            class="mission__img"
            :src="content.image_second"
            alt=""
            data-aos="fade-right"
            data-aos-duration="700"
          />
        </div>
        <div class="mission__content">
          <h3
            class="mission__title page__title"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.title_fourth }}
          </h3>
          <p
            class="mission__text"
            style="white-space: pre-line"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.text_fourth }}
          </p>
          <img
            class="mission__img"
            :src="content.image_third"
            alt=""
            data-aos="fade-right"
            data-aos-duration="700"
          />
        </div>
        <div class="mission__content">
          <h3
            class="mission__title page__title"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.title_fifth }}
          </h3>
          <p
            class="mission__text"
            style="white-space: pre-line"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ content.text_fifth }}
          </p>
          <img
            class="mission__img"
            :src="content.image_fourth"
            alt=""
            data-aos="fade-right"
            data-aos-duration="700"
          />
        </div>
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
      this.$api.get('/social-mission').then((res) => {
        this.content = res.data
        console.log(this.content)
      })
    },
  },
}
</script>
