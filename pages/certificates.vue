<template>
  <div>
    <app-intro-arrow>
      <h3 class="intro__title intro__title-arrow">
        Подарочные сертификаты
      </h3>
    </app-intro-arrow>
    <div class="certificates page__block">
      <div class="container">
          <div class="certificates__inner">
            <app-certificates-cards v-for="item in items" :key="item" :item="item"/>
          </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>

import AppIntroArrow from '~/components/intro/AppIntroArrow.vue';
import AppCertificatesCards from "~/components/cards/AppCertificatesCards.vue";
import AppNews from '~/components/news/AppNews.vue';

export default {
  name: 'ExploitationAccessoriesPage',
  components: {
    AppIntroArrow,
    AppCertificatesCards,
    AppNews,
  },
  data() {
    return {
      items: [
        // {
        //   image: 'https://i.pinimg.com/originals/0d/fd/a8/0dfda807c8f42e7b5c79c13057bf755e.jpg',
        //   title: 'Подарочный сертификат номиналом 500 грн.',
        //   price: '500.00 грн.',
        // },
        // {
        //   image: 'https://i.pinimg.com/originals/0d/fd/a8/0dfda807c8f42e7b5c79c13057bf755e.jpg',
        //   title: 'Подарочный сертификат номиналом 1000 грн.',
        //   price: '1000.00 грн.',
        // },
        // {
        //   image: 'https://i.pinimg.com/originals/0d/fd/a8/0dfda807c8f42e7b5c79c13057bf755e.jpg',
        //   title: 'Подарочный сертификат номиналом 2000 грн.',
        //   price: '2000.00 грн.',
        // },
        // {
        //   image: 'https://i.pinimg.com/originals/0d/fd/a8/0dfda807c8f42e7b5c79c13057bf755e.jpg',
        //   title: 'Подарочный сертификат номиналом 3000 грн.',
        //   price: '3000.00 грн.',
        // },
        // {
        //   image: 'https://i.pinimg.com/originals/0d/fd/a8/0dfda807c8f42e7b5c79c13057bf755e.jpg',
        //   title: 'Подарочный сертификат номиналом 5000 грн.',
        //   price: '5000.00 грн.',
        // },
      ]
    }
  },
}
</script>


