<template>
  <section class="obag__insta page__block">
    <div class="container">
      <div class="obag__insta-top page__block-top">
        <h3
          class="obag__insta-title page__title"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          O bag Instagram
        </h3>
        <a
          class="obag__insta-link page__block-link"
          href="https://www.instagram.com/Obagofficial.kz/"
          target="_blank"
        >
          Перейти в instagram
        </a>
      </div>
      <div class="obag__insta-gallery">
        <img
          v-for="item in getIntagramPosts"
          :key="item.id"
          :src="item.media_url"
          alt=""
          data-aos="flip-left"
          data-aos-duration="1000"
        />
      </div>
      <nuxt-link
        tag="button"
        to="/catalog"
        class="obag__insta-btn page__border-btn"
        data-aos="fade-left"
        data-aos-duration="700"
      >
        Открыть полный каталог
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppInsta',
  data() {
    return {
      images: [],
    }
  },
  computed: {
    getIntagramPosts() {
      if (this.images.length < 8) return this.images
      return this.images.slice(0, 8)
    },
  },
  mounted() {
    this.loadIntagramPosts()
  },
  methods: {
    loadIntagramPosts() {
      fetch(
        'https://graph.instagram.com/me/media?fields=id,media_url&access_token=IGQVJWekczNV9WZAFozVlUyTEFSX1VUcDhUY1hGYVZAQUWVQTmVuYWkwRVBsQUZAqSXlLcVl5NDR4N3NPWVlSTm1NY3ZAGaGFQLU5vcVNEV3o3dE50bHBVM0FQY3pHQTdZAem13VGdKUVM0aGYzbkNWd3NSNAZDZD'
      )
        .then((response) => response.json())
        .then((result) => (this.images = result.data))
    },
    getImage(imageUrl) {
      return `${require(`@/assets/images/${imageUrl}`)}`
    },
  },
}
</script>
