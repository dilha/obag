<template>
  <section class="accessories page__block">
    <div class="container">
      <div class="card__inner">
        <div v-for="accessorie in items" :key="accessorie.title" class="card__item"
          :style="{ backgroundImage: `url(${accessorie.image})` }">
          <nuxt-link class="card__item-title" :to="{ name: 'catalog', params: { id: categoryId } }">
            {{ accessorie.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppAccessoriesCards',
  props: {
    items: {
      type: Array,
      require: true,
    },
    categoryId: {
      type: Number
    },
  },
  data() {
    return {
      // accessories: [
      //   {
      //     title:'Аксессуары для пляжа',
      //     bgImg:'assets/images/accessories/accessories-1.jpg',
      //   },
      //   {
      //     title:'Браслеты',
      //     bgImg:'assets/images/accessories/accessories-2.jpg',
      //   },
      //   {
      //     title:'Клатчи и косметички',
      //     bgImg:'assets/images/accessories/accessories-3.jpg',
      //   },
      //   {
      //     title:'Защитные маски',
      //     bgImg:'assets/images/accessories/accessories-4.jpg',
      //   },
      //   {
      //     title:'Кошельки',
      //     bgImg:'assets/images/accessories/accessories-5.jpg',
      //   },
      //   {
      //     title:'Подвески',
      //     bgImg:'assets/images/accessories/accessories-6.jpg',
      //   },
      // ]
    }
  },
}
</script>