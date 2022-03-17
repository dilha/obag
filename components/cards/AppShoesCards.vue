<template>
  <section class="shoes page__block">
    <div class="container">
      <div class="card__inner">
        <div
          v-for="shoe in items"
          :key="shoe.title"
          class="card__item"
          :style="{ backgroundImage: `url(${shoe.image})` }"
        >
          <nuxt-link
            class="card__item-title"
            :to="{ name: 'catalog', params: { id: shoe.id } }"
          >
            {{ shoe.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppClockCards',
  props: {
    items: {
      type: Array,
      require: true,
    },
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