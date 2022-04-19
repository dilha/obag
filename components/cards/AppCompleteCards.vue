<template>
   <section class="completes page__block">
      <div class="container">
         <div class="card__inner">
            <div v-for="complete in items" :key="complete.title" class="card__item"
               :style="{ backgroundImage: `url(${complete.image})` }">
               <nuxt-link class="card__item-title"
                  :to="{ name: 'catalog', params: { id: categoryId, subcatid: complete.id } }">
                  {{ complete.title }}
               </nuxt-link>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: 'AppCompleteCards',
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
      return {
      }
   },
}
</script>