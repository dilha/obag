<template>
    <section class="accessories page__block">
        <div class="container">
            <div class="card__inner">
                <div class="card__item" v-for="accessorie in accessories" :key="accessorie" :style="{backgroundImage:`url(${getImage(accessorie.bgImg)})`}">
                    <a class="card__item-title" href="">
                        {{ accessorie.title }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppAccessoriesCards",
    data() {
      return {
        accessories: [
          {
            title:'Аксессуары для пляжа',
            bgImg:'assets/images/accessories/accessories-1.jpg',
          },
          {
            title:'Браслеты',
            bgImg:'assets/images/accessories/accessories-2.jpg',
          },
          {
            title:'Клатчи и косметички',
            bgImg:'assets/images/accessories/accessories-3.jpg',
          },
          {
            title:'Защитные маски',
            bgImg:'assets/images/accessories/accessories-4.jpg',
          },
          {
            title:'Кошельки',
            bgImg:'assets/images/accessories/accessories-5.jpg',
          },
          {
            title:'Подвески',
            bgImg:'assets/images/accessories/accessories-6.jpg',
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