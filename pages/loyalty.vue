<template>
  <div>
    <app-intro-arrow>
      <h3 class="intro__title intro__title-arrow">
        Система лояльности от компании O bag KAZAKHSTAN
      </h3>
    </app-intro-arrow>
    <div class="loyalty">
      <div class="container">
        <div class="loyalty__block page__block">
            <h3 class="loyalty__title page__title">
              Как работает система лояльности o bag
            </h3>
            <ol class="loyalty__list">
              <li class="loyalty__list-item">
                Регестрируйте в O bag. Club
              </li>
              <li class="loyalty__list-item">
                Накапливайте бонусы. Они действуют на протяжении 365 с момента последней покупки.
              </li>
              <li class="loyalty__list-item">
                Рассчитывайте бонусами до 50% от суммы покупки. 1 бонус = 1 гривна.
              </li>
              <li class="loyalty__list-item">
                Получайте дополнительные бонусы и специальные предложения от O bag.
              </li>
            </ol>
            <div class="loyalty__percent">
              <div class="loyalty__percent-item loyalty__percent-item--10">
                <p class="loyalty__percent-number">
                  10%
                </p>
                <p class="loyalty__percent-text">
                  Получаейте за каждую покупку в размере 10% от суммы чеке при покупке товаров их новых коллекций
                </p>
              </div>
              <div class="loyalty__percent-item loyalty__percent-item--5">
                <p class="loyalty__percent-number">
                  5%
                </p>
                <p class="loyalty__percent-text">
                  5% при покупки товаров со скидками.
                </p>
              </div>
            </div>
        </div>
        <div class="loyalty__block page__block">
          <h3 class="loyalty__title page__title">
            <span>Welcome Бонус:</span> 200 грн! 
          </h3>
          <p class="loyalty__text">
            Дарим 200 поздравительных бонусов всем новым клиентам! Чтобы получить их, нужно только зарегистрироваться на obag.ua. Ждать, пока бонусы появятся, не придется - они начислятся сразу после авторизации на сайте. Бонусы действуют 30 дней после регистрации. 200 грн вы можете потратить на любой товар по полной стоимости.
          </p>
        </div>
        <div class="loyalty__inner inside__inner">
          <div class="loyalty__item">
            <img class="loyalty__item-img" src="@/assets/images/icons/loyalty-1.svg" alt="">
            <p class="loyalty__item-text">
                Покупайте любимые аксессуары в фирменных магазинах O bag и в интернет-магазине obag.ua. Регистрируйтесь на кассе магазина или на сайте и присоединяйся к программе лояльности O bag. Club**.
            </p>
          </div>
          <div class="loyalty__item">
            <img class="loyalty__item-img" src="@/assets/images/icons/loyalty-2.svg" alt="">
            <p class="loyalty__item-text">
                Получайте бонусы за каждую покупку в размере 10% от суммы в чеке в случае покупки товаров из новых коллекций; а также 5% - в случае покупки товаров со скидками.
            </p>
          </div>
          <div class="loyalty__item">
            <img class="loyalty__item-img" src="@/assets/images/icons/loyalty-3.svg" alt="">
            <p class="loyalty__item-text">
                При каждой покупке называйте зарегистрированный номер телефона или авторизируйстесь на сайте.
            </p>
          </div>
          <div class="loyalty__item">
            <img class="loyalty__item-img" src="@/assets/images/icons/loyalty-4.svg" alt="">
            <p class="loyalty__item-text">
              Полученные бонусы сохраняются на вашем «бонусном счете» и могут быть использованы уже через 14 дней после покупки.
              Рассчитаться накопленными бонусами можно до 50% от стоимости товара (за исключением акционных товаров или товаров со скидками). При расчёте 1 бонус равняется 1 гривне.  
            </p>
          </div>
          <div class="loyalty__item">
            <img class="loyalty__item-img" src="@/assets/images/icons/loyalty-5.svg" alt="">
            <p class="loyalty__item-text">
                Бонусы будут действовать в течение 365 дней с момента последней покупки. Принимая участие в O bag. Club, вы всегда будете получать новости про эксклюзивные предложения и закрытые акции первыми. А также индивидуальные бонусы и предложения..
            </p>
          </div>
          <div class="loyalty__item">
            <img class="loyalty__item-img" src="@/assets/images/icons/loyalty-6.svg" alt="">
            <p class="loyalty__item-text">
                *Программа лояльности O bag. Club действует только на территории Украины.
                **Условия участия в Программе лояльности могут быть изменены Организатором.
            </p>
          </div>
        </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'LoyaltyPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
}
</script>


