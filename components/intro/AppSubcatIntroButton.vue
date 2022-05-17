<template>
   <section class="intro" :style="{ backgroundImage: `url(${image})` }">
      <slot></slot>
      <nuxt-link class="intro__btn"
         :to="`/catalog/${categoryId}/${categorySlug}/${subcategoryId}/${subcategorySlug}`">
         Смотреть
      </nuxt-link>
   </section>
</template>

<script>
export default {
   name: 'AppSubcatIntro',
   props: {
      image: {
         type: String,
         required: true,
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
      console.log(this.сategoryId, this.categorySlug, this.subcategoryId, this.subcategorySlug)
   }
}
</script>
