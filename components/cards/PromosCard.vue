<template>
  <div v-if="item" class="news__item">
    <img class="news__item-img" :src="item.image" alt="" />
    <div class="news__item-title">
      {{ item.title }}
    </div>
    <p class="news__item-text">
      {{ item.text }}
    </p>
    <nuxt-link
      :to="{ name: 'promos-id-slug', params: { id: item.id, slug: item.slug } }"
      class="news__item-link"
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
}
</script>
