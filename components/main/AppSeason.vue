<template>
    <section class="season page__block">
    <div class="container">
      <div class="season__inner">
        <div class="season__intro" :style="{backgroundImage:`url(${getImage('assets/images/intro/main-season-intro.jpg')})`}">
            <button class="intro__btn intro__season">
              Смотреть
            </button>
        </div>
        <div class="season__slider">
            <product-card v-for="item in items" :key="item" :item="item" />
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
            title: "Женская сумка O bag Unique Сангрия",
            priceOld: "1990.00 грн.",
            priceNew: "1393.00 грн",
            image: "https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png"
          },
        ]
      }
    },
    methods:{
        getImage(path){
            return require('@/' + path)
        }
    }
}
</script>