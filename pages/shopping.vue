<template>
    <div>
        <app-intro-arrow>
          <h3 class="intro__title intro__title-arrow">
            Мобильный шопинг
          </h3>
        </app-intro-arrow>
        <div class="shopping inside">
          <div class="container">
            <div class="shopping__block inside__block">
              <h3 class="shopping__title inside__title page__title">
                 Теперь у вас есть возможность посетить наши розничные магазины онлайн, <span>не выходя из дома</span>
              </h3>
              <p class="shopping__text">
                Вы можете сделать видеозвонок напрямую в O bag.store. А наши сотрудники проведут для вас тур по магазину. Он будет точно таким же, как и при личном визите, отличие одно - вам не нужно никуда выходить! Оформить заказ можно сразу же по видеосвязи. А после - оплатить его онлайн. Также вы можете выбрать другой удобный формат - консультация по аудиосвязи, запрос на фото и видео с товаром. 
              </p>
            </div>
            <div class="shopping__block inside__block">
              <h3 class="shopping__title inside__title page__title">
                Как работает “мобильный шопинг”?
              </h3>
              <h6 class="shopping__subtitle">
                  Все просто:
              </h6>
              <ol class="shopping__list">
                <li class="shopping__list-tiem">
                  Вы выбираете магазин, который хотите посетить.
                </li>
                <li class="shopping__list-tiem">
                  Нажимаете на кнопку мессенджера, по которому удобно позвонить.
                </li>
                <li class="shopping__list-tiem">
                  Открываете мессенджер и совершаете звонок. 
                </li>
                <li class="shopping__list-tiem">
                  В период карантина мобильный шопинг работает с 10:00 до 22:00
                </li>
              </ol>
            </div>
            <div class="shopping__inner inside__block">
              <div class="shopping__item">
                <img class="shopping__item-img" src="@/assets/images/shopping/shopping-1.jpg" alt="">
                <h6 class="shopping__item-title">
                  Одесса Ривьера
                </h6>
                <div class="shopping__item-bottom">
                  <a class="shopping__item-link shopping__item-telegram" href="#?">
                    Telegram
                  </a>
                  <a class="shopping__item-link shopping__item-viber" href="#?">
                    Viber
                  </a>
                </div>
              </div>
              <div class="shopping__item">
                <img class="shopping__item-img" src="@/assets/images/shopping/shopping-2.jpg" alt="">
                <h6 class="shopping__item-title">
                  Днепр Мост
                </h6>
                <div class="shopping__item-bottom">
                  <a class="shopping__item-link shopping__item-telegram" href="#?">
                    Telegram
                  </a>
                  <a class="shopping__item-link shopping__item-viber" href="#?">
                    Viber
                  </a>
                </div>
              </div>
              <div class="shopping__item">
                <img class="shopping__item-img" src="@/assets/images/shopping/shopping-3.jpg" alt="">
                <h6 class="shopping__item-title">
                  Киев Гулливер
                </h6>
                <div class="shopping__item-bottom">
                  <a class="shopping__item-link shopping__item-telegram" href="#?">
                    Telegram
                  </a>
                  <a class="shopping__item-link shopping__item-viber" href="#?">
                    Viber
                  </a>
                </div>
              </div>
              <div class="shopping__item">
                <img class="shopping__item-img" src="@/assets/images/shopping/shopping-4.jpg" alt="">
                <h6 class="shopping__item-title">
                  Киев Океан Плаза
                </h6>
                <div class="shopping__item-bottom">
                  <a class="shopping__item-link shopping__item-telegram" href="#?">
                    Telegram
                  </a>
                  <a class="shopping__item-link shopping__item-viber" href="#?">
                    Viber
                  </a>
                </div>
              </div>
            </div>
            <div class="shopping__block inside__block">
              <h3 class="shopping__title inside__title page__title">
                Что вам дает “мобильный шопинг”?
              </h3>
              <ol class="shopping__list">
                <li class="shopping__list-tiem">
                  Возможность приобрести необходимый товар удаленно.
                </li>
                <li class="shopping__list-tiem">
                  Эмоции, как от офлайн-шопинга.
                </li>
                <li class="shopping__list-tiem">
                  Доставка в кратчайшие сроки. Ваш заказ будет передан в транспортную компанию в этот же день.
                </li>
                <li class="shopping__list-tiem">
                  Удобную оплату онлайн через сервис Wayforpay. А это: Быстрая оплата через Google pay или Apple pay. Возможность оформить заказ в рассрочку от Монобанка или Приват Банка.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <app-news />
    </div>
</template>

<script>
import AppIntroArrow from "~/components/intro/AppIntroArrow.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'ShoppingPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
  
}
</script>
