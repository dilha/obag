<template>
  <section
    class="intro intro-red"
    :style="{ backgroundImage: `url(${getImageUrl})` }"
  >
    <slot></slot>
    <a
      class="intro__arrow"
      :href="`#${link}`"
      data-aos="fade-down"
      data-aos-duration="700"
    >
      <icon-white-arrow />
    </a>
  </section>
</template>

<script>
import IconWhiteArrow from '~/components/icons/IconWhiteArrow.vue'

export default {
  name: 'AppIntroWhiteArrow',

  components: {
    IconWhiteArrow,
  },

  props: {
    banner: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '?',
    },
  },

  computed: {
    getImageUrl() {
      return `https://api.obagofficial.kz/storage/${this.banner}`
    },
  },
}
</script>
