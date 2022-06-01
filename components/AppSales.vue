<template>
   <section class="page__block">
      <div class="container">
         <h3 class="page__title">Продукты</h3>
         <div class="sales__inner">
            <sale-card v-for="product in products" :key="product.id" :item="product" />
         </div>
      </div>
   </section>
</template>

<script>
import SaleCard from './product/SaleCard.vue'
// import ProductCard from '~/components/product/ProductCard.vue'

export default {
   name: 'AppSales',
   components: {
      SaleCard,
   },
   props: {
      products: {
         type: Array,
         default: () => []
      }
   },
}
</script>

<style lang="scss" scoped>
.sales__inner {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 40px;
   margin: 35px 0 0;
}

@media screen and (max-width: 980px) {
   .sales__inner {
      grid-column-gap: 20px;
   }
}

@media screen and (max-width: 870px) {
   .sales__inner {
      grid-column-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
   }
}
</style>