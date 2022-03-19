<template>
  <form class="header__form">
    <div class="form-row">
      <input
        v-model="searchTerm"
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
export default {
  name: 'AppSearch',
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    search() {
      if (this.searchTerm) {
        this.$router({ name: 'catalog', params: { term: this.searchTerm } })
      }
    },
  },
}
</script>
