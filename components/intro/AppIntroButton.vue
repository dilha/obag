<template>
  <section class="intro" :style="{ backgroundImage: `url(${image})` }">
    <slot></slot>
    <nuxt-link
      class="intro__btn"
      :to="`/catalog/${categoryId}/${categorySlug}`"
    >
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
    categorySlug: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
      default: '',
    },
  },
  mounted() {},
}
</script>
