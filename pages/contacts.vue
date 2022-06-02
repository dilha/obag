<template>
  <div>
    <app-intro-arrow link="contacts">
      <h3 class="intro__title intro__title-arrow">Контакты компании O bag</h3>
    </app-intro-arrow>
    <div id="contacts" class="contacts">
      <div class="container">
        <div v-if="contact" class="contacts__inner">
          <div class="contacts__content">
            <div class="contacts__content-item contacts__content-message">
              <a
                :href="`mailto:${contact['1_email']}`"
                target="_blank"
                class="contacts__content-title"
              >
                {{ contact['1_email'] }}
              </a>
            </div>
            <div class="contacts__content-item contacts__content-phone">
              <a
                :href="`tel:${contact.number}`"
                class="contacts__content-title"
              >
                {{ contact.number }}
              </a>
            </div>
            <div class="contacts__content-item contacts__content-clock">
              <h5 class="contacts__content-title">Время работы</h5>
              <p class="contacts__content-text">
                {{ contact.time }}
              </p>
            </div>
          </div>
          <form class="contacts__form" @submit.prevent="sendfeedbackForm">
            <input
              v-model="feedbackForm.name"
              class="contacts__form-input"
              type="text"
              placeholder="Ваше имя*"
              required
            />
            <input
              v-model="feedbackForm.surname"
              class="contacts__form-input"
              type="text"
              placeholder="Ваша фамилия*"
              required
            />
            <input
              v-model="feedbackForm.email"
              class="contacts__form-input"
              type="text"
              placeholder="E-mail*"
              required
            />
            <input
              v-model="feedbackForm.number"
              class="contacts__form-input"
              type="text"
              placeholder="Номер телефона*"
              required
            />
            <textarea
              id=""
              v-model="feedbackForm.text"
              class="contacts__form-textarea"
              name=""
              cols="30"
              rows="10"
              placeholder="Сообщение*"
              required
            ></textarea>
            <div class="contacts__form-checkbox">
              <input id="check" class="contacts__form-check" type="checkbox" />
              <label class="contacts__form-label" for="check">
                Как заинтересованная сторона, ознакомившись с Политикой
                конфиденциальности, я даю согласие на обработку моих личных
                данных для ответа на мой запрос к O bag
              </label>
            </div>
            <button class="contacts__form-btn page__border-btn" type="submit">
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
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'MissionPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
  mixins: [MetaSeo],
  data() {
    return {
      feedbackForm: {
        name: '',
        surname: '',
        email: '',
        number: '',
        text: '',
      },
      contact: null,
    }
  },
  mounted() {
    this.getContact()
  },
  methods: {
    getContact() {
      this.$api.get('/contact').then((res) => {
        this.contact = res.data
      })
    },
    sendfeedbackForm() {
      this.$api.post('/contact', this.feedbackForm).then((res) => {
        console.log(res)
        alert('Форма отпралена')
      })
    },
  },
}
</script>
