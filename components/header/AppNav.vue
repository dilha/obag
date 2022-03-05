<template>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/season">
            Mid Season Sale
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/collection">
            Коллекции
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/season">
            Сумки
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/clock">
            Часы
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/glasses">
            Очки
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/accessories">
            Аксессуары
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/shoes">
            Обувь
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/certificates">
            Gift card
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/catalog">
            Каталог
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/season">
            Конструктор
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/contacts">
            Контакты
          </nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: "AppNav",
}
</script>