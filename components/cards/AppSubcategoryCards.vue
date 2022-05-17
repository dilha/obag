<template>
  <section class="shoes page__block">
    <div class="container">
      <div class="card__inner">
        <div v-for="item in items" :key="item.id" class="card__item" :style="{ backgroundImage: `url(${item.image})` }">
          <nuxt-link class="card__item-title" :to="`/completes/${categoryId}/${categorySlug}/${item.id}/${item.slug}`">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppSubcategoryCards',
  props: {
    categoryId: {
      type: Number,
      required: true,
    },
    categorySlug: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(['category']),
  },
  mounted() {
    // console.log("GGGG", this.cate);
  },
}
</script>
