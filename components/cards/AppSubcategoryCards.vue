<template>
   <section class="shoes page__block">
      <div class="container">
         <div class="card__inner">
            <div v-for="item in items" :key="item.title" class="card__item"
               :style="{ backgroundImage: `url(${item.image})` }">
               <nuxt-link class="card__item-title"
                  :to="{ name: 'completes', params: { id: categoryId, subcatId: item.id } }">
                  {{ item.title }}
               </nuxt-link>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: 'AppSubcategoryCards',
   props: {
      categoryId: {
         type: Number
      },
      items: {
         type: Array,
         require: true,
      },
   },
   data() {
      return {}
   },
}
</script>