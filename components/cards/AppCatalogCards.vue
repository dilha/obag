<template>
    <section class="catalog page__block">
        <div class="container">
            <div class="catalog__top page__block-top">
                <h3 class="catalog__title page__title">
                    Каталог
                </h3>
                <a class="catalog__link page__block-link" href="">
                    Открыть полный каталог
                </a>
            </div>
            <div class="card__inner">
                <div v-for="catalog in catalogs" :key="catalog.title" class="card__item" :style="{backgroundImage:`url(${getImage(catalog.bgImg)})`}">
                    <a class="card__item-title" href="">
                       {{ catalog.title }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppCatalogCards",
    data() {
      return {
        catalogs: [
          {
            title:'o bag classic',
            bgImg:'assets/images/catalog/catalog-1.jpg',
          },
          {
            title:'o bag mini',
            bgImg:'assets/images/catalog/catalog-2.jpg',
          },
          {
            title:'o bag urban',
            bgImg:'assets/images/catalog/catalog-3.jpg',
          },
          {
            title:'o pocket',
            bgImg:'assets/images/catalog/catalog-4.jpg',
          },
          {
            title:'o bag glam',
            bgImg:'assets/images/catalog/catalog-5.jpg',
          },
          {
            title:'o bag pad',
            bgImg:'assets/images/catalog/catalog-6.jpg',
          },
          {
            title:'o bag unique',
            bgImg:'assets/images/catalog/catalog-7.jpg',
          },
          {
            title:'o bag queen',
            bgImg:'assets/images/catalog/catalog-8.jpg',
          },
          {
            title:'o bag reverse',
            bgImg:'assets/images/catalog/catalog-9.jpg',
          },
          {
            title:'o bag market',
            bgImg:'assets/images/catalog/catalog-10.jpg',
          },
          {
            title:'o bag cabas',
            bgImg:'assets/images/catalog/catalog-11.jpg',
          },
          {
            title:'o bag doc',
            bgImg:'assets/images/catalog/catalog-12.jpg',
          },
          {
            title:'o bag sharm',
            bgImg:'assets/images/catalog/catalog-13.jpg',
          },
          {
            title:'o bag swing',
            bgImg:'assets/images/catalog/catalog-14.jpg',
          },
        ]
      }
    },
    methods:{
        getImage(path){
            return require('@/' + path)
        },
    }

}
</script>