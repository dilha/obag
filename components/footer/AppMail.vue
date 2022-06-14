<template>
  <section class="mailing">
    <div class="container">
      <div class="mailing__inner">
        <div
          class="mailing__content"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <h3 class="mailing__title page__title">
            Подпишитесь на нашу рассылку
          </h3>
          <p class="mailing__text">
            Всегда будьте в курсе поледних новостей бренда
          </p>
          <button
            class="mailing__btn page__border-btn"
            @click="isVisibleEmailModal = true"
          >
            Подписаться
          </button>
        </div>
        <img
          class="mailing__img"
          src="@/assets/images/mail-box.png"
          alt=""
          data-aos="fade-left"
          data-aos-duration="700"
        />
      </div>
    </div>
    <app-subscription
      v-if="isVisibleEmailModal"
      @close="isVisibleEmailModal = false"
    />
  </section>
</template>

<script>
import AppSubscription from '~/components/modal/AppSubscription.vue'
export default {
  name: 'AppMail',
  components: {
    AppSubscription,
  },
  data() {
    return {
      isVisibleEmailModal: false,
    }
  },
}
</script>
