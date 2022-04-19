<template>
  <section v-if="recomended" class="will__like page__block">
    <div class="container">
      <div class="will__like-top page__block-top">
        <h3 class="will__like-title page__title">Вам понравится</h3>
        <div class="will__like-button">
          <button
            v-for="(item, index) in recomended"
            :key="index"
            class="will__like-btn"
            :class="{ active: item === selectedRecomendedMenu }"
            @click="selectRecomendedMenu(item)"
          >
            {{ item.title }}
          </button>
        </div>
      </div>
      <div v-if="selectedRecomendedMenu" class="will__like-inner">
        <product-card
          v-for="selected in selectedRecomendedMenu.products"
          :key="selected.id"
          :item="selected"
        />
      </div>
      <nuxt-link
        tag="button"
        class="will__like-button page__border-btn"
        :to="{ name: 'catalog', params: { id: id } }"
      >
        Открыть полный каталог
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store'
// import ProductCard from '~/components/product/ProductCard.vue'

export default {
  name: 'AppLike',
  components: {
    // ProductCard,
  },
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      selectedRecomendedMenu: null,
    }
  },
  computed: {
    ...mapState(['recomended']),
  },
  mounted() {
    this.getRecomended().then(() => {
      if (this.recomended?.length > 0) {
        this.selectedRecomendedMenu = this.recomended[0]
      }
    })
  },
  methods: {
    ...mapActions({ getRecomended: actionTypes.loadRecomended }),
    selectRecomendedMenu(recomendedItem) {
      this.selectedRecomendedMenu = recomendedItem
    },
  },
}
</script>
