
<template>
  <div class="sorting" @click="select">
    <div class="sorting__header">
      <span class="sorting__current">
        {{ currentLang.label }}
      </span>
      <img
        class="sorting__arrow"
        src="@/assets/images/icons/select-icon.svg"
        alt=""
      />
    </div>
    <div class="sorting__body">
      <div
        v-for="item in items"
        :key="item"
        class="sorting__item"
        @click="replacement(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingSelect',
  data() {
    return {
      currentLang: '',
      items: [
        {
          label: 'По цене',
        },
      ],
    }
  },
  mounted() {
    this.currentLang = this.items[0]
  },
  methods: {
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
      this.currentLang = item
    },
  },
}
</script>
