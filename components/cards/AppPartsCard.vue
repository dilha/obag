<template>
  <div v-if="item" class="parts">
    <img class="parts__img" :src="item.image" alt="" />
    <div class="parts__content">
      <div class="parts__title">
        {{ item.title }}
      </div>
      <div class="parts__number">
        <p>Кол-во:</p>
        <p>1</p>
      </div>
      <div class="parts__price">{{ numberWithSpaces(item.price) }} тг</div>
    </div>
  </div>
</template>

<script>
import { numberWithSpaces } from '~/helpers/utils'

export default {
  name: 'AppPartsCard',
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  methods: {
    numberWithSpaces,
    removeElement() {
      this.$emit('deleteElement', this.item)
    },
  },
}
</script>
