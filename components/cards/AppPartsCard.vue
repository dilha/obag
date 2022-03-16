<template>
  <div v-if="item" class="parts">
    <img class="parts__img" :src="item.previewImage" alt="" />
    <div class="parts__content">
      <div class="parts__title">
        {{item.title}}
      </div>
      <div class="parts__number">
        <p>Кол-во:</p>
        <p>1</p>
      </div>
      <div class="parts__price">
        {{item.price}}
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
    }
  }
}
</script>