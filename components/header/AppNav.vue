<template>
  <nav class="nav">
    <div class="burger" :class="{ 'active': IsNavShow }" @click="toggleNav">
      <span class="burger-line"></span>
    </div>
    <ul class="nav__list" :class="{ 'active': IsNavShow }">
      <nuxt-link v-for="link in links" :key="link.id" tag="li" class="nav__item nav__link" :to="link.src">
        {{ link.text }}
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  data() {
    return {
      IsNavShow: false,
      links: [
        {
          id: 1,
          text: 'Mid Season Sale',
          src: '/season',
        },
        {
          text: 'Сумки',
          src: '/bags',
        },
        {
          text: 'Рюкзаки',
          src: '/backpacks',
        },
        {
          text: 'Часы',
          src: '/clock',
        },
        {
          text: 'Очки',
          src: '/glasses',
        },
        {
          text: 'Аксессуары',
          src: '/accessories',
        },
        {
          text: 'Обувь',
          src: '/shoes',
        },
        {
          text: 'Gift card',
          src: '/certificates',
        },
        {
          text: 'Каталог',
          src: '/catalog',
        },
        {
          text: 'Конструктор',
          src: '/constructor',
        },
        {
          text: 'Контакты',
          src: '/contacts',
        },
      ]
    }
  },
  watch: {
    $route(to, from) {
      this.IsNavShow = false;
    }
  },
  methods: {
    toggleNav() {
      this.IsNavShow = !this.IsNavShow;
    },
  }
}
</script>