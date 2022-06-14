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
          href="https://www.instagram.com/obag.almaty/"
          target="_blank"
        >
          Перейти в instagram
        </a>
      </div>
      <div class="obag__insta-gallery">
        <img
          v-for="(item, index) in images"
          :key="index"
          :src="getImage(item)"
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
      images: [
        'insta/insta-1.jpg',
        'insta/insta-2.jpg',
        'insta/insta-3.jpg',
        'insta/insta-4.jpg',
        'insta/insta-5.jpg',
        'insta/insta-6.jpg',
        'insta/insta-7.jpg',
        'insta/insta-8.jpg',
      ],
    }
  },
  methods: {
    getImage(imageUrl) {
      return `${require(`@/assets/images/${imageUrl}`)}`
    },
  },
}
</script>
