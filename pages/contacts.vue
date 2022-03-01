<template>
    <div>
        <app-intro-arrow> 
          <h3 class="intro__title intro__title-arrow">
              Информация
              о бренде O bag
          </h3>
        </app-intro-arrow>
        <div class="contacts">
            <div class="container">
                <div class="contacts__inner">
                    <div class="contacts__content">
                        <div class="contacts__content-item contacts__content-message">
                            <h5 class="contacts__content-title">
                                marketing@obag.ua
                            </h5>
                            <p class="contacts__content-text">
                                сотрудничество
                            </p>
                        </div>
                        <div class="contacts__content-item contacts__content-message">
                            <h5 class="contacts__content-title">
                                sales@obag.ua
                            </h5>
                            <p class="contacts__content-text">
                                оптовые закупки
                            </p>
                        </div>
                        <div class="contacts__content-item contacts__content-message">
                            <h5 class="contacts__content-title">
                                hello@obag.ua
                            </h5>
                            <p class="contacts__content-text">
                                интернет магазин
                            </p>
                        </div>
                        <div class="contacts__content-item contacts__content-phone">
                            <h5 class="contacts__content-title">
                                +38 044 333 43 42
                            </h5>
                            <p class="contacts__content-text">
                                (многоканальный)
                            </p>
                        </div>
                        <div class="contacts__content-item contacts__content-clock">
                            <h5 class="contacts__content-title">
                                Время работы
                            </h5>
                            <p class="contacts__content-text">
                                ПН - ВС с 09:00 до 20:00
                            </p>
                        </div>
                    </div>
                    <form class="contacts__form">
                        <input class="contacts__form-input" type="text" placeholder="Ваше имя*">
                        <input class="contacts__form-input" type="text" placeholder="Ваша фамилия*">
                        <input class="contacts__form-input" type="text" placeholder="E-mail*">
                        <input class="contacts__form-input" type="text" placeholder="Номер телефона*">
                        <textarea class="contacts__form-textarea" name="" id="" cols="30" rows="10" placeholder="Сообщение*"></textarea>
                        <div class="contacts__form-checkbox">
                            <input class="contacts__form-check" type="checkbox" id="check">
                            <label class="contacts__form-label" for="check">
                                Как заинтересованная сторона, ознакомившись с Политикой конфиденциальности, я даю согласие на обработку моих личных данных для ответа на мой запрос к O bag
                            </label>
                        </div>
                        <button class="contacts__form-btn page__border-btn">
                            Отправить
                        </button>
                    </form>
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
  name: 'MissionPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
}
</script>
