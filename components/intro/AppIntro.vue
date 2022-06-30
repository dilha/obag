<template>
  <section class="intro" :style="{ backgroundImage: `url(${item})` }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AppIntro',
  props: {
    item: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImage(path) {
      return require('@/' + path)
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  h3 {
    color: #ffffff;
    text-shadow: 0px 4px 17px rgba(81, 81, 81, 0.25);
  }
}
</style>
