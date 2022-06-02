<template>
  <div class="sorting" @click="select">
    <div class="sorting__header">
      <span class="sorting__current">
        {{ currentFilter.label }}
      </span>
      <img
        class="sorting__arrow"
        src="@/assets/images/icons/select-icon.svg"
        alt=""
      />
    </div>
    <div class="sorting__body">
      <div
        v-for="(item, index) in Object.values(items)"
        :key="index"
        class="sorting__item"
        @click="replacement(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '~/store/catalog'
export default {
  name: 'SortingSelect',
  data() {
    return {
      currentFilter: '',
      items: {
        ASC: {
          id: 1,
          label: 'по возрастанию',
          type: 'ASC',
        },
        DESC: {
          id: 2,
          label: 'по убыванию',
          type: 'DESC',
        },
      },
    }
  },
  computed: {
    ...mapState('catalog', [
      'selectedCategory',
      'selectedSubCategory',
      'sortPriceType',
    ]),
  },
  mounted() {
    this.currentFilter = this.sortPriceType
      ? this.items[this.sortPriceType]
      : this.items.ASC
  },
  methods: {
    ...mapActions('catalog', {
      setSortType: actionTypes.changeSortPriceType,
      loadSortedCategoryProducts: actionTypes.loadAllCategoryProducts,
      loadSortedSubCategoryProducts: actionTypes.loadAllSubCategoryProducts,
    }),
    select() {
      const dropdown = document.querySelector('.sorting__body')
      const arrow = document.querySelector('.sorting__header > img')
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block'
        arrow.style.transform = 'rotate(180deg)'
      } else if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none'
        arrow.style.transform = 'rotate(0deg)'
      }
    },
    replacement(item) {
      this.currentFilter = item
      this.setSortType(item.type)
      if (this.selectedSubCategory) {
        this.loadSortedSubCategoryProducts(this.selectedSubCategory)
        return
      }
      this.loadSortedCategoryProducts(this.selectedCategory)
    },
  },
}
</script>
