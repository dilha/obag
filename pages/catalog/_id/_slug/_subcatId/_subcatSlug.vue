<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__top">
        <h3 class="catalog__title page__title">Каталог</h3>
        <div class="catalog__sorting">
          <p>Сортировка:</p>
          <sorting-select />
        </div>
      </div>
      <div class="burger bar-logo" :class="{ active: isAppear }" @click="isAppear = !isAppear">
        <span class="burger-line"></span>
      </div>

      <div class="catalog__page">
        <div :class="['aside-wrapper', { appear: isAppear }]">
          <catalog-aside ref="catalogAside" />
        </div>

        <div class="catalog__content">
          <catalog-model ref="catalogModel" @clear-filters="handleClearFilters" />
          <div v-if="products.length" class="catalog__inner">
            <product-card v-for="item in products" :key="item.id" :item="item" />
          </div>
          <div v-else>
            <img v-if="isLoading" src="@/assets/images/loader.gif" alt="" />
            <h2 v-else>В данной категории нет товаров</h2>
          </div>
        </div>
      </div>
    </div>
    <app-news />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MetaSeo from '@/mixins/MetaSeo.vue'
import { actionTypes } from '@/store/catalog'
import SortingSelect from '~/components/catalog/SortingSelect.vue'
import CatalogAside from '~/components/catalog/CatalogAside.vue'
import CatalogModel from '~/components/catalog/CatalogModel.vue'
import ProductCard from '~/components/product/ProductCard.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'CatalogDeepPage',
  components: {
    SortingSelect,
    CatalogAside,
    CatalogModel,
    ProductCard,
    AppNews,
  },
  mixins: [MetaSeo],
  data() {
    return {
      isAppear: false,
    }
  },
  computed: {
    ...mapState('catalog', ['products', 'isLoading', 'categories']),
  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    ...mapActions('catalog', {
      loadSearchProducts: actionTypes.loadSearchProducts,
    }),
    handleClearFilters() {
      this.$refs.catalogAside?.clearAllFilters()
    },
  },
}
</script>
<style scoped>
.bar-logo {
  display: none;
}

.close-btn {
  display: none;
  cursor: pointer;
  position: relative;
  bottom: 16px;
  left: 4px;
  color: black;
  font-size: 31px;
  font-weight: 600;
  font-family: cursive;
}

@media (max-width: 700px) {
  .aside-wrapper {
    overflow: auto;
    /* color: white; */
    font-family: sans-serif;
    z-index: 100;
    transition: 0.5s;
    position: absolute;
    left: -500%;
    padding: 20px 20px 20px 20px;
    top: 0px;
    max-width: 339px;
    background: white;
    height: 100vh;
  }

  .aside-wrapper.appear {
    transition: 0.5s;
    left: 0px !important;
  }

  .close-btn {
    display: block;
  }

  .bar-logo {
    /* background-color: black; */
    width: 45px;
    height: 32px;
    display: inline-block !important;
    cursor: pointer;
  }
}
</style>
