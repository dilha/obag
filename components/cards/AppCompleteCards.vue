<template>
  <section class="completes page__block">
    <div class="container">
      <div class="card__inner">
        <div v-for="complete in items" :key="complete.title" class="card__item"
          :style="{ backgroundImage: `url(${complete.image})` }">
          <nuxt-link class="card__item-title"
            :to="`/catalog/${categoryId}/${categorySlug}/${subcategoryId}/${subcategorySlug}?completId=${complete.id}`">
            {{ complete.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppCompleteCards',
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      categoryId: null,
      categorySlug: null,
      subcategoryId: null,
      subcategorySlug: null
    }
  },
  mounted() {
    this.categoryId = this.$route?.params?.id
    this.categorySlug = this.$route?.params?.slug
    this.subcategoryId = this.$route?.params?.subcatId
    this.subcategorySlug = this.$route?.params?.subcatSlug
  },
}
</script>
