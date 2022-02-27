<template>
    <section class="season page__block">
    <div class="container">
      <div class="season__inner">
        <div class="season__intro" :style="{backgroundImage:`url(${getImage('assets/images/intro/main-season-intro.jpg')})`}">
            <button class="intro__btn">
              Смотреть
            </button>
        </div>
        <div class="season__slider">
            <product-card />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'AppSeason',
    methods:{
        getImage(path){
            return require('@/' + path)
        }
    }
}
</script>