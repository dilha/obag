<template>
    <header class="header">
    <div class="container">
    <div class="header__top">
      <a class="header__logo" href="#?">
        <img src="~/assets/images/logo.png" alt="O bag">
      </a>
      <form class="header__form">
        <input class="header__search" type="text" placeholder="Черная сумка">
      </form>
        <div class="language" @click="select"> 
          <div class="language__header">
              <span class="language__current">
                Рус
              </span>
              <img class="language__arrow" src="@/assets/images/icons/select-icon.svg" alt="">
          </div>
          <div class="language__body">
              <div class="language__item" @click="replacement">
                Рус
              </div>
              <div class="language__item" @click="replacement">
                Анг
              </div>
              <div class="language__item" @click="replacement">
                Каз
              </div>
          </div>
      </div>
      <a class="header__bookmarks header__link"  href="#?">
        <span class="header__number header__bookmarks--number">2</span> Закладки
      </a>
      <a class="header__basket header__link"  href="#?">
        <span class="header__number header__basket--number">1</span> Корзина
      </a>
      <a class="header__profile header__link"  href="#?">
        Мой профиль
      </a>
    </div>
    <nav-block />
    </div>
  </header>
</template>

<script>
import NavBlock from "~/components/NavBlock.vue";

export default {
    name: 'HeaderBlock',
    components: {
      NavBlock,
    }
}
</script>
