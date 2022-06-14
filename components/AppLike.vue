<template>
  <section v-if="recomended" class="will__like page__block">
    <div class="container">
      <div class="will__like-top page__block-top">
        <h3
          class="will__like-title page__title"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          Вам понравится
        </h3>
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
          data-aos="flip-left"
          data-aos-duration="1000"
        />
      </div>
      <nuxt-link
        tag="button"
        class="will__like-button page__border-btn"
        :to="getLink"
        data-aos="fade-left"
        data-aos-duration="700"
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
    categoryId: {
      type: Number,
      default: null,
    },
    categorySlug: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedRecomendedMenu: null,
    }
  },
  computed: {
    ...mapState(['recomended']),
    getLink() {
      if (this.categoryId && this.categorySlug) {
        return `/catalog/${this.categoryId}/${this.categorySlug}`
      }
      return '/catalog'
    },
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
