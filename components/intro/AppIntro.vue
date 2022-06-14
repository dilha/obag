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
