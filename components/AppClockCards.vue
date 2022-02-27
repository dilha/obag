<template>
    <div class="clock">
        <div class="container">
            <div class="card__inner">
                <div class="card__item" v-for="clock in clocks" :key="clock" :style="{backgroundImage:`url(${getImage(clock.bgImg)})`}">
                    <a class="card__item-title" href="">
                        {{ clock.title }}
                    </a>
                </div>
                <h3 class="clock__title">
                    O clock
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppClockCards",
    data() {
      return {
        clocks: [
          {
            title:'O clock',
            bgImg:'assets/images/clock/clock-1.jpg',
          },
          {
            title:'O clock great',
            bgImg:'assets/images/clock/clock-2.jpg',
          },
          {
            title:'O clock shift',
            bgImg:'assets/images/clock/clock-3.jpg',
          },
          {
            title:'O clock shift great',
            bgImg:'assets/images/clock/clock-4.jpg',
          },
          {
            title:'O click shift',
            bgImg:'assets/images/clock/clock-5.jpg',
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