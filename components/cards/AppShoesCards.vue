<template>
    <section class="shoes page__block">
        <div class="container">
            <div class="card__inner">
                <div class="card__item" v-for="shoe in shoes" :key="shoe" :style="{backgroundImage:`url(${getImage(shoe.bgImg)})`}">
                    <a class="card__item-title" href="">
                        {{ shoe.title }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppClockCards",
    data() {
      return {
        shoes: [
          {
            title:'Шлепанцы',
            bgImg:'assets/images/shoes/shoes-1.jpg',
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