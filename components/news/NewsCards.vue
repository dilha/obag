<template>
  <div v-if="item" class="news__item">
    <img class="news__item-img" :src="item.image" alt="" />
    <div class="news__item-title">
      {{ item.title }}
    </div>
    <p class="news__item-text">
      {{ getNewsText }}
    </p>
    <nuxt-link
      :to="{ name: 'news-id', params: { id: item.id } }"
      class="news__item-link"
    >
      Подробнее
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NewsCards',
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  computed: {
    getNewsText() {
      const words = this.item?.text.split(' ')
      if (words.length > 0) {
        return words?.slice(0, 12).join(' ') + '...'
      }
      return ''
    },
  },
}
</script>
