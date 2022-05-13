<template>
    <section class="obag__insta page__block">
    <div class="container">
      <div class="obag__insta-top page__block-top">
        <h3 class="obag__insta-title page__title">
          O bag Instagram
        </h3>
        <a class="obag__insta-link page__block-link" href="https://www.instagram.com/obag.almaty/" target="_blank">
          Перейти в instagram
        </a>
      </div>
      <div class="obag__insta-gallery">
        <img src="@/assets/images/insta/insta-1.jpg" alt="">
        <img src="@/assets/images/insta/insta-2.jpg" alt="">
        <img src="@/assets/images/insta/insta-3.jpg" alt="">
        <img src="@/assets/images/insta/insta-4.jpg" alt="">
        <img src="@/assets/images/insta/insta-5.jpg" alt="">
        <img src="@/assets/images/insta/insta-6.jpg" alt="">
        <img src="@/assets/images/insta/insta-7.jpg" alt="">
        <img src="@/assets/images/insta/insta-8.jpg" alt="">
      </div>
      <nuxt-link tag="button" to="/catalog" class="obag__insta-btn page__border-btn">
        Открыть полный каталог
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
    name: "AppInsta",
}
</script>