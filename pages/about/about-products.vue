<template>
  <div v-if="productsInformation">
    <app-intro-arrow link="about-products">
      <h3 class="intro__title intro__title-arrow">
        Информация о продукции O bag
      </h3>
    </app-intro-arrow>
    <div id="about-products" class="about__products">
      <div class="container">
        <h3 class="about__products-title page__title">Сумки</h3>
        <div v-for="(item,index) in productsInformation" :key="index" class="about__content">
          <h4 class="about__content-title page__title">{{item.title}}</h4>
          <div class="about__inner">
            <div class="about__item">
              <div class="about__item-text" v-html="item.text">
              </div>
              <a class="about__item-btn page__border-btn" :href="item.button_link" target="_blank">
                {{item.name_button}}
              </a>
            </div>
            <img
              class="about__item-img"
              :src="item.image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'AboutProductPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
  mixins: [MetaSeo],
  data() {
    return {
      productsInformation: null,
    }
  },
  mounted() {
    this.getAboutProducts()
  },
  methods: {
    getAboutProducts() {
      this.$api.get('/product-information').then((res) => {
        this.productsInformation = res.data
        console.log(this.productsInformation)
      })
    },
  },
}
</script>
