<template>
    <section class="shoes page__block">
        <div class="container">
            <div class="card__inner">
                <div v-for="shoe in items" :key="shoe.title" class="card__item" :style="{backgroundImage:`url(${shoe.image})`}">
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
    props: {
        items: {
            type: Array,
            require: true
        }
    },
    data() {
      return {
        // shoes: [
        //   {
        //     title:'Шлепанцы',
        //     bgImg:'assets/images/shoes/shoes-1.jpg',
        //   },
        // ]
      }
    },
}
</script>