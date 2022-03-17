<template>
    <section class="clock page__block">
        <div class="container">
            <div class="card__inner">
                <div v-for="item in items" :key="item.id" class="card__item" :style="{backgroundImage:`url(${item.image})`}">
                    <nuxt-link
            class="card__item-title"
            :to="{ name: 'catalog', params: { id: item.id } }"
            >
            {{ item.title }}
        </nuxt-link>
                </div>
                <h3 class="clock__title">
                    O clock
                </h3>
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
            require: true,
        },
    },
    data() {
      return {
        // clocks: [
        //   {
        //     title:'O clock',
        //     bgImg:'assets/images/clock/clock-1.jpg',
        //   },
        //   {
        //     title:'O clock great',
        //     bgImg:'assets/images/clock/clock-2.jpg',
        //   },
        //   {
        //     title:'O clock shift',
        //     bgImg:'assets/images/clock/clock-3.jpg',
        //   },
        //   {
        //     title:'O clock shift great',
        //     bgImg:'assets/images/clock/clock-4.jpg',
        //   },
        //   {
        //     title:'O click shift',
        //     bgImg:'assets/images/clock/clock-5.jpg',
        //   },
        // ]
      }
    },
}
</script>