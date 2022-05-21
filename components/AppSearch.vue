<template>
  <form class="header__form">
    <div class="form-row">
      <input
        v-model="term"
        class="aside__search-input"
        type="text"
        placeholder="Поиск"
        @keydown.enter="search"
      />
      <button class="search__icon" @click.prevent="search"></button>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '@/store/catalog'

export default {
  name: 'AppSearch',
  data() {
    return {
      term: '',
    }
  },
  computed: {
    ...mapState('catalog', ['searchTerm']),
  },
  watch: {
    searchTerm: {
      handler(newTerm) {
        this.loadSearchProducts(newTerm)
      },
    },
  },
  methods: {
    ...mapActions('catalog', {
      changeSearchTerm: actionTypes.changeSearchTerm,
      loadSearchProducts: actionTypes.loadSearchProducts,
    }),
    search() {
      if (this.$route.path !== 'catalog') {
        this.$router.push({ path: '/catalog', query: { term: this.term } })
      }
      this.changeSearchTerm(this.term)
    },
  },
}
</script>
