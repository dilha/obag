<template>
  <div>
    <app-intro-arrow link="shopping">
      <h3
        class="intro__title intro__title-arrow"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        Мобильный шопинг
      </h3>
    </app-intro-arrow>
    <div v-if="content" id="shopping" class="shopping inside">
      <div
        class="container"
        v-html="content.text"
        data-aos="fade-right"
        data-aos-duration="700"
      ></div>
    </div>
    <app-mobile-shopping-cards :shops="blocks" />
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'
import AppMobileShoppingCards from '~/components/cards/AppMobileShoppingCards.vue'
export default {
  name: 'ShoppingPage',
  components: {
    AppIntroArrow,
    AppNews,
    AppMobileShoppingCards,
  },
  mixins: [MetaSeo],
  data() {
    return {
      content: null,
      blocks: [],
    }
  },
  mounted() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.$api.get('/mobile-shopping').then((res) => {
        this.content = res.data
        this.blocks = res.data.blocks
      })
    },
  },
}
</script>
