<template>
  <div>
    <app-intro-arrow link="certificates">
      <h3 class="intro__title intro__title-arrow">Подарочные сертификаты</h3>
    </app-intro-arrow>
    <div class="certificates page__block" id="certificates">
      <div class="container">
        <div v-if="certificates" class="certificates__inner">
          <app-certificates-cards v-for="(item, index) in certificates" :key="index" :item="item" />
          <!-- <product-card v-for="item in certificates" :key="item" :item="item"/> -->
        </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store/certificates'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppCertificatesCards from '~/components/cards/AppCertificatesCards.vue'
import AppNews from '~/components/news/AppNews.vue'
// import ProductCard from "~/components/product/ProductCard.vue"

export default {
  name: 'ExploitationAccessoriesPage',
  components: {
    AppIntroArrow,
    AppCertificatesCards,
    AppNews,
    // ProductCard,
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    ...mapState('certificates', ['certificates']),
  },
  mounted() {
    this.getCertificates()
  },
  methods: {
    ...mapActions('certificates', {
      getCertificates: actionTypes.loadCertificates,
    }),
  },
}
</script>


