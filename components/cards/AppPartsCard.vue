<template>
  <div v-if="item" class="parts">
    <nuxt-link
      class="product__card-link"
      :to="{ name: 'products-id', params: { id: item.id } }"
    >
      <img class="parts__img" :src="item.image" alt="" />
    </nuxt-link>
    <div class="parts__content">
      <div class="parts__title">
        {{ item.title }}
      </div>
      <div class="parts__number">
        <p>Кол-во:</p>
        <p>1</p>
      </div>
      <div class="parts__price">
        {{ item.price }}тг
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPartsCard',
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  methods: {
    removeElement() {
      this.$emit('deleteElement', this.item)
    },
  },
}
</script>
