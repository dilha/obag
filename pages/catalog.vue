<template>
  <section class="catalog">
    {{ $route.params }}
    <div class="container">
      <div class="catalog__top">
        <h3 class="catalog__title page__title">Каталог</h3>
        <div class="catalog__sorting">
          <p>Сортировка:</p>
          <sorting-select />
        </div>
      </div>
      <div class="catalog__page">
        <catalog-aside />
        <div class="catalog__content">
          <catalog-model />
          <div v-if="products.length" class="catalog__inner">
            <product-card
              v-for="item in products"
              :key="item.id"
              :item="item"
            />
          </div>
          <div v-else>
            <img v-if="isLoading" src="@/assets/images/loader.gif" alt="" />
            <h2 v-else>Нет товара</h2>
          </div>
        </div>
      </div>
    </div>
    <app-news />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SortingSelect from '~/components/catalog/SortingSelect.vue'
import CatalogAside from '~/components/catalog/CatalogAside.vue'
import CatalogModel from '~/components/catalog/CatalogModel.vue'
import ProductCard from '~/components/product/ProductCard.vue'
import AppNews from '~/components/news/AppNews.vue'
export default {
  name: 'CatalogPage',
  components: {
    SortingSelect,
    CatalogAside,
    CatalogModel,
    ProductCard,
    AppNews,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('catalog', ['products', 'isLoading']),
  },
  methods: {},
}
</script>
