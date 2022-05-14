<template>
  <section class="intro" :style="{ backgroundImage: `url(${image})` }">
    <slot></slot>
    <nuxt-link class="intro__btn" :to="{ name: 'catalog', params: { id: categoryId } }">
      Смотреть
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'AppIntro',
  props: {
    categoryId: {
      type: Number,
      default: -1,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
