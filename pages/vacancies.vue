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
          <h3 class="vacancies__title page__title">Присоединяйтесь к нам!</h3>
          <p class="vacancies__text">
            Мы всегда ищем увлечённых, активных людей, которые умеют отличаться.
            Если вы считаете, что обладаете этими качествами и чувствуете, что
            готовы работать в мире O bag, выберите свою специализацию и
            отправьте нам заявку. Если вы соответствуете нашим критериям - отдел
            кадров обязательно свяжется с вами. В любом случае ваше резюме
            останется в наших архивах, сохраняя все правила этики и защиты
            персональных данных.
          </p>
          <form
            ref="resumeFormRef"
            class="vacancies__form"
            @submit.prevent="sendResume"
          >
            <div class="vacancies__form-box">
              <input
                v-model="resumeData.name"
                class="vacancies__input"
                type="text"
                required
                placeholder="Ваше имя*"
              />
              <input
                v-model="resumeData.surname"
                class="vacancies__input"
                type="text"
                required
                placeholder="Ваша фамилия*"
              />
              <input
                v-model="resumeData.email"
                class="vacancies__input"
                type="email"
                required
                placeholder="E-mail*"
              />
              <input
                v-model.trim="resumeData.phone"
                class="vacancies__input"
                type="text"
                required
                placeholder="Номер телефона*"
              />
              <textarea
                v-model="resumeData.text"
                class="vacancies__textarea"
                required
                name=""
                cols="30"
                rows="10"
                placeholder="Сообщение*"
              ></textarea>
            </div>
            <p
              v-if="isFileNotUpload"
              class="validation-error-message"
              style="color: red"
            >
              Поле файл обязательно
            </p>
            <label for="uploadFileInput">
              <input
                id="uploadFileInput"
                type="file"
                style="display: none"
                @change="uploadedFile"
              />
              <span class="vacancies__download"> Загрузить файл </span>
            </label>
            <p
              v-if="agreeError"
              class="validation-error-message"
              style="color: red"
            >
              Поле обязательно
            </p>
            <div class="vacancies__checkbox">
              <input
                id="check"
                v-model="isAgree"
                class="vacancies__check"
                type="checkbox"
              />
              <label class="vacancies__label" for="check">
                Как заинтересованная сторона, ознакомившись с Политикой
                конфиденциальности, я даю согласие на обработку моих личных
                данных для ответа на мой запрос к O bag
              </label>
            </div>
            <button class="vacancies__btn page__border-btn" type="submit">
              Отправить
            </button>
          </form>
          <p v-if="isSuccess" class="sucess-send" style="color: green">
            Вы успешно отправили
          </p>
        </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'VacanciesPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
  mixins: [MetaSeo],
  data() {
    return {
      isSuccess: false,
      isAgree: false,
      agreeError: false,
      isFileNotUpload: false,
      resumeData: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        text: '',
      },
      file: null,
    }
  },
  methods: {
    sendResume() {
      if (!this.isAgree) {
        this.agreeError = true
        return
      }
      if (!this.file) {
        this.isFileNotUpload = true
        return
      }
      const resumeFormData = new FormData()

      for (const [key, val] of Object.entries(this.resumeData)) {
        resumeFormData.append(key, val)
      }
      if (this.file) {
        resumeFormData.append('file', this.file)
      }
      this.$api.post('/vacancies', resumeFormData).then(() => {
        this.isSuccess = true
        this.$refs.resumeFormRef.reset()
      })
    },
    uploadedFile({ target }) {
      this.file = target.files[0]
    },
  },
}
</script>
