<template>
  <section class="mid__flash page__block">
    <div class="container">
      <div v-for="item in items" :key="item.id" class="mid__flash-inner">
        <img
          class="mid__flash-img mid-img"
          :src="item.image"
          alt=""
          data-aos="fade-right"
          data-aos-duration="700"
        />
        <div
          class="mid__flash-content"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <h3 class="mid__flash-title page__title">{{ item.title }}</h3>
          <p class="mid__flash-text">
            {{ sliceItemText(item.text) }}
          </p>
          <nuxt-link
            tag="button"
            :to="`/promos/${item.id}`"
            class="mid__flash-btn page__border-btn"
          >
            Перейти
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMidFlash',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sliceItemText(text) {
      const words = text.split(' ')
      if (words.length > 0) {
        return words?.slice(0, 12).join(' ') + '...'
      }
      return ''
    },
  },
}
</script>
