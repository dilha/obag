<template>
    <div>
        <app-intro-arrow>
          <h3 class="intro__title intro__title-arrow">
            Актуальные вакансии компании O bag KAZAKHSTAN
          </h3>
        </app-intro-arrow>
        <div class="vacancies inside">
          <div class="container">
            <div class="vacancies__block inside__block">
              <h3 class="vacancies__title page__title">
                Присоединяйтесь к нам!
              </h3>
              <p class="vacancies__text">
                Мы всегда ищем увлечённых, активных людей, которые умеют отличаться. Если вы считаете, что обладаете этими качествами и чувствуете, что готовы работать в мире O bag, выберите свою специализацию и отправьте нам заявку. Если вы соответствуете нашим критериям - отдел кадров обязательно свяжется с вами. В любом случае ваше резюме останется в наших архивах, сохраняя все правила этики и защиты персональных данных.
              </p>
              <form class="vacancies__form">
                <div class="vacancies__form-box">
                  <input class="vacancies__input" type="text" placeholder="Ваше имя*">
                  <input class="vacancies__input" type="text" placeholder="Ваша фамилия*">
                  <input class="vacancies__input" type="email" placeholder="E-mail*">
                  <input class="vacancies__input" type="number" placeholder="Номер телефона*">
                  <textarea id="" class="vacancies__textarea" name="" cols="30" rows="10" placeholder="Сообщение*"></textarea>
                </div>
                <a class="vacancies__download" href="#?">
                  Загрузить файл
                </a>
                <div class="vacancies__checkbox">
                    <input id="check" class="vacancies__check" type="checkbox">
                    <label class="vacancies__label" for="check">
                      Как заинтересованная сторона, ознакомившись с Политикой конфиденциальности, я даю согласие на обработку моих личных данных для ответа на мой запрос к O bag
                    </label>
                </div>
                <button class="vacancies__btn page__border-btn">
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
  name: 'VacanciesPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
}
</script>
