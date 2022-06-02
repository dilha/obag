<template>
  <section class="intro" :style="{ backgroundImage: `url(${image})` }">
    <slot></slot>
    <nuxt-link class="intro__btn" :to="getLink"> Смотреть </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'AppIntro',
  props: {
    categoryId: {
      type: Number,
      default: null,
    },
    categorySlug: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    getLink() {
      if (this.categoryId && this.categorySlug) {
        return `/catalog/${this.categoryId}/${this.categorySlug}`
      }
      return '/catalog'
    },
  },
  mounted() {},
}
</script>
