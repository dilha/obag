<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <div class="footer__left-top">
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">O bag</li>
              <li class="footer__list-item">
                <nuxt-link to="/history" class="footer__list-link">
                  История/Миссия
                </nuxt-link>
              </li>
              <li class="footer__list-item">
                <nuxt-link to="/mission" class="footer__list-link" href="#?">
                  Социальная миссия
                </nuxt-link>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">Бренд</li>
              <li class="footer__list-item">
                <nuxt-link to="/about/about-brand" class="footer__list-link" href="#?">
                  О бренде O bag
                </nuxt-link>
              </li>
              <li class="footer__list-item">
                <nuxt-link to="/about/about-products" class="footer__list-link" href="#?">
                  О продукции
                </nuxt-link>
              </li>
           
            </ul>
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">Новости</li>
              <li class="footer__list-item">
                <nuxt-link to="/all-news" class="footer__list-link" href="#?">
                  Новости
                </nuxt-link>
              </li>
              <li class="footer__list-item">
                <nuxt-link to="/research" class="footer__list-link" href="#?">
                  Исследования и инновации
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer__info">
            <a href="tel:+7 701 348 1947" class="footer__info-text footer__info-phone">
              +7 701 348 1947 ( многоканальный )
            </a>
            <p class="footer__info-text footer__info-schedule">
              Время работы пн-вс с 9:00 до 20:00
            </p>
          </div>
        </div>
        <div class="footer__right">
          <ul class="footer__list">
            <li class="footer__list-item footer__list-title">
              Обслуживание клиентов
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/contacts" class="footer__list-link">
                Контакты
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/delivery" class="footer__list-link">
                Доставка и оплата
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/recovery" class="footer__list-link">
                Возврат
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/warranty" class="footer__list-link">
                Гарантии
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/exploitation-products" class="footer__list-link">
                Правила эксплуатации
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/exploitation-accessories" class="footer__list-link">
                Инструкции
              </nuxt-link>
            </li>
          </ul>
          <ul class="footer__list">
            <li class="footer__list-item footer__list-title">
              Поиск магазинов
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/shop" class="footer__list-link">
                Наши магазины
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/vacancies" class="footer__list-link">
                Вакансии
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/shopping" class="footer__list-link">
                Мобильный шопинг
              </nuxt-link>
            </li>
          </ul>
          <ul class="footer__list">
            <li class="footer__list-item footer__list-title">Дополнительно</li>
            <li class="footer__list-item">
              <nuxt-link to="/all-news" class="footer__list-link">
                Акции
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/certificates" class="footer__list-link">
                Подарочные сертификаты
              </nuxt-link>
            </li>

            <li class="footer__list-item">
              <nuxt-link to="/corporate" class="footer__list-link" href="#?">
                Корпоративным клиентам
              </nuxt-link>
            </li>
            <li class="footer__list-item">
              <nuxt-link to="/save" class="footer__list-link" href="#?">
                Save Your O bag
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__copy">
        <p class="footer__copy-text">
          © 2020 O bag Kazakhstan. Официальное представительство компании O bag
          на територии Казахстана
        </p>
        <div class="footer__social">
          <a class="footer__social-link" href="https://www.facebook.com/Obag/" target="_blank">
            <icon-facebook />
          </a>
          <a class="footer__social-link" href="https://www.instagram.com/obagofficial/" target="_blank">
            <icon-instagram />
          </a>
          <a class="footer__social-link" href="https://t.me/obag_copy" target="_blank">
            <icon-telegram />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconFacebook from '~/components/icons/IconFacebook.vue'
import IconInstagram from '~/components/icons/IconInstagram.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'

export default {
  name: 'AppFooter',
  components: {
    IconFacebook,
    IconInstagram,
    IconTelegram,
  },
}
</script>
