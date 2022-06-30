<template>
  <div v-if="item" class="promos__item">
    <img class="promos__item-img" :src="item.preview_image" alt="" />
    <div class="promos__item-title">
      {{ item.title }}
    </div>
    <div class="promos__item-text" v-html="item.text"></div>
    <nuxt-link
      :to="{ name: 'promos-id-slug', params: { id: item.id, slug: item.slug } }"
      class="promos__item-link"
    >
      Подробнее
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PromosCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getPromoText() {
      const words = this.item?.text.split(' ')
      if (words.length > 0) {
        return words?.slice(0, 12).join(' ') + '...'
      }
      return ''
    },
  },
}
</script>
