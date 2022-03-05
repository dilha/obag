<template>
  <section class="season page__block">
    <div class="container">
      <div class="season__inner">
        <div
          class="season__intro"
          :style="{
            backgroundImage: `url(${getImage(
              'assets/images/intro/main-season-intro.jpg'
            )})`,
          }"
        >
          <button class="intro__btn intro__season">Смотреть</button>
        </div>
        <div class="season__slider">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in items" :key="item">
              <product-card :item="item" />
            </swiper-slide>
            <div slot="button-next" class="swiper-button-next swiper-next">
              <img src="@/assets/images/icons/right-arrow.svg" alt="">
            </div>
            <div slot="button-prev" class="swiper-button-prev swiper-prev">
              <img src="@/assets/images/icons/left-arrow.svg" alt="">
            </div>
          </swiper>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppSeason',
  data() {
    return {
      items: [
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка fsdfdfdf Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сdfdfdfdfdfdfdfdf',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
      ],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    getImage(path) {
      return require('@/' + path)
    },
  },
}
</script>