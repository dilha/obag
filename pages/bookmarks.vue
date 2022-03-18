<template>
  <section v-if="isLoggedIn" class="bookmarks">
    <div class="container">
      <h3 class="bookmarks__title page__title">Мои закладки</h3>
      <div class="will__like-inner">
        <product-card v-for="item in bookmarks" :key="item" :item="item" />
      </div>
    </div>
  </section>
</template>



<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ProductCard from '~/components/product/ProductCard.vue'
import { actionTypes as bookmarkActionTypes } from '~/store/bookmarks'

export default {
  name: 'BookmarksPage',
  components: {
    ProductCard,
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {
    ...mapState('auth', ['isLoggedIn']),
    ...mapGetters('bookmarks', ['bookmarks']),
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.message = 'No auth'
    } else {
      this.loadFavorites()
    }
  },
  methods: {
    ...mapActions('bookmarks', {
      loadFavorites: bookmarkActionTypes.loadFavorites,
    }),
  },
}
</script>

<style lang="scss">
.bookmarks {
  margin: 60px 0 120px;
}
</style>
