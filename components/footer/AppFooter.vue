<template>
    <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <div class="footer__left-top">
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">
                  O bag
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  История/Миссия
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Социальная миссия
                </a>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">
                  Бренд
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  О бренде O bag
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  О продукции
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Коллекции
                </a>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">
                  Новости
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Новости
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Исследования и инновации
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__info">
            <p class="footer__info-text footer__info-phone">
              +38 044 333 43 42 ( многоканальный )
            </p>
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
                <a class="footer__list-link" href="#?">
                  Контакты
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Доставка и оплата
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Возврат
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Гарантии
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Правила эксплуатации
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Инструкции
                </a>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">
                  Поиск магазинов
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Наши магазины
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Вакансии
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Мобильный шопинг
                </a>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__list-item footer__list-title">
                  Дополнительно
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Акции
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Подарочные сертификаты
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Система лояльности
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Корпоративным клиентам
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#?">
                  Save Your O bag
                </a>
              </li>
            </ul>
        </div>
      </div>
      <div class="footer__copy">
        <p class="footer__copy-text">
          © 2020 O bag Kazakhstan. Официальное представительство компании O bag на територии Казахстана
        </p>
        <div class="footer__social">
          <a class="footer__social-link" href="#?">
            <icon-facebook />
          </a>
          <a class="footer__social-link" href="#?">
            <icon-instagram />
          </a>
          <a class="footer__social-link" href="#?">
            <icon-telegram />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";
import IconTelegram from "~/components/icons/IconTelegram.vue"

export default {
    name: "AppFooter",
    components: {
        IconFacebook,
        IconInstagram,
        IconTelegram,
    }
}
</script>