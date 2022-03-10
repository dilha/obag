<template>
  <section class="reviews">
    <div class="content">
      <div class="reviews__header flex-row">
        <h2 class="title">Отзывы клиентов</h2>
        <div class="reviews__slider__actions flex-row">
          <app-button
            slot="button-prev"
            icon="arrow-left"
            tag="button"
            to="#"
            width="4"
            height="6.85"
            class="slider-actions__prev-button button-cirle"
            :class="{
              ' button-cirle--active': activeSlideIndex !== 1,
            }"
            @click="prevSlide"
          ></app-button>
          <app-button
            slot="button-next"
            to="#"
            icon="arrow-right"
            tag="button"
            width="4"
            height="6.85"
            class="slider-actions__next-button button-cirle"
            :class="{
              ' button-cirle--active': activeSlideIndex !== pageCount,
            }"
            @click="nextSlide"
          ></app-button>
        </div>
      </div>
    </div>
    <!-- <div class="reviews__full-wrapper"> -->
    <div class="reviews__slider-container">
      <div
        v-show="selectedReview"
        ref="reviewsExpand"
        class="reviews__expand flex-row"
      >
        <div v-if="selectedReview" class="content flex-row">
          <div class="reviews__slide-image-wrapper flex-row">
            <img
              :src="getImage(selectedReview.image)"
              alt=""
              class="reviews__slide-image"
            />
          </div>
          <div class="reviews__slide-description flex-col">
            <h3 class="reviews__slide-username">
              {{ selectedReview.username }}
            </h3>
            <p class="reviews__slide-published-date">
              {{ selectedReview.publishedDate }}
            </p>
            <p class="reviews__slide-text">
              {{ selectedReview.fullText }}
            </p>
            <button class="reviews__slide-readall" @click="closeReviewsFull">
              <span class="reviews__slide-readd-text">Развернуть </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.4223 0.22622L0.243875 4.20963C0.0812692 4.35633 1.74161e-08 4.53952 1.47922e-08 4.75955C1.21683e-08 4.97958 0.0813591 5.16277 0.243875 5.30947L0.72533 5.7738C0.883665 5.92454 1.07613 5.99991 1.30291 5.99991C1.52541 5.99991 1.72016 5.92457 1.887 5.7738L5.00002 2.80449L8.11946 5.77393C8.27779 5.92463 8.47025 6 8.69706 6C8.91954 6 9.11436 5.92465 9.28112 5.77393L9.76251 5.30955C9.92084 5.15883 10 4.97545 10 4.75964C10 4.54373 9.92084 4.3604 9.76251 4.20972L5.58408 0.22622C5.4172 0.0754352 5.2225 -4.1456e-07 5 -4.17213e-07C4.77321 -2.18776e-05 4.58064 0.0754352 4.4223 0.22622Z"
                  fill="#294A69"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <div class="content">
        <swiper
          ref="reviewsSlider"
          class="swiper reviews__slider"
          :options="swiperOption"
        >
          <swiper-slide
            v-for="item in slides"
            :key="item.id"
            class="reviews__slide flex-row"
          >
            <div class="reviews__slide-image-wrapper flex-row">
              <img
                :src="getImage(item.image)"
                alt=""
                class="reviews__slide-image"
              />
            </div>
            <div class="reviews__slide-description flex-col">
              <h3 class="reviews__slide-username">{{ item.username }}</h3>
              <p class="reviews__slide-published-date">
                {{ item.publishedDate }}
              </p>
              <p class="reviews__slide-text">
                {{ item.shortText }}
              </p>

              <a class="reviews__slide-readall" @click="readAllReviews(item)">
                <span class="reviews__slide-readd-text">Читать весь</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5777 5.77378L9.75612 1.79037C9.91873 1.64367 10 1.46048 10 1.24045C10 1.02042 9.91864 0.837232 9.75612 0.690535L9.27467 0.226198C9.11634 0.0754563 8.92387 8.55059e-05 8.69709 8.5496e-05C8.47459 8.54863e-05 8.27984 0.0754349 8.113 0.226198L4.99998 3.19551L1.88054 0.226069C1.72221 0.0753705 1.52975 -3.70246e-07 1.30294 -3.80161e-07C1.08046 -3.89885e-07 0.885643 0.075349 0.718879 0.226069L0.237491 0.690449C0.0791559 0.841169 -4.47843e-08 1.02455 -5.42181e-08 1.24036C-6.36556e-08 1.45627 0.0791559 1.6396 0.237491 1.79028L4.41592 5.77378C4.5828 5.92456 4.7775 6 5 6C5.22679 6.00002 5.41936 5.92456 5.5777 5.77378Z"
                    fill="#294A69"
                  />
                </svg>
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReviewsSlider',

  data() {
    return {
      selectedReview: null,
      slides: [
        {
          id: 1,
          username: 'Кусайнова Райхан',
          publishedDate: '20 сентябрь 2022',
          shortText:
            'Хочется много сказать про страховую компанию Стандарт Лайф! Я и мои клиенты',
          image: '/app/reviews-slider/reviews-1.png',
          fullText:
            'От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей.',
        },
        {
          id: 2,
          username: 'Екатерина Романова',
          publishedDate: '20 сентябрь 2022',
          shortText:
            'Хочется много сказать про страховую компанию Стандарт Лайф! Я и мои клиенты',
          image: '/app/reviews-slider/reviews-2.png',
          fullText:
            'От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей.',
        },
        {
          id: 3,
          username: 'Амиржанов Асема',
          publishedDate: '20 сентябрь 2022',
          shortText:
            'Хочется много сказать про страховую компанию Стандарт Лайф! Я и мои клиенты',
          image: '/app/reviews-slider/reviews-3.png',
          fullText:
            'От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей.',
        },
        {
          id: 4,
          username: 'Иванова Наталья',
          publishedDate: '20 сентябрь 2022',
          shortText:
            'Хочется много сказать про страховую компанию Стандарт Лайф! Я и мои клиенты',
          image: '/app/reviews-slider/reviews-2.png',
          fullText:
            'От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей. От профессионально управляемых портфелей до индивидуальных инвестиционных стратегий - у нас есть опыт и знания, на которые вы можете положиться для достижения ваших целей.',
        },
      ],
      activeSlideIndex: 0,
      slideTotalCount: 0,
      pageCount: 0,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        on: {
          click: () => {
            // this.readAllReviews(e.realIndex)
          },
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.reviewsSlider?.$swiper
    },
    expandedSlider() {
      return this.$refs.reviewsExpand
    },
    currentSlideIndex() {
      if (this.activeSlideIndex < 10) {
        return '0' + this.activeSlideIndex
      }
      return this.activeSlideIndex
    },
    slideTotal() {
      if (this.slideTotalCount < 10) {
        return '0' + this.slideTotalCount
      }
      return this.slideTotalCount
    },
  },
  mounted() {
    this.slideTotalCount = this.swiper.slides.length
    this.activeSlideIndex = this.swiper.activeIndex + 1
    this.pageCount = Math.ceil(
      this.swiper.slides.length / this.swiper.params.slidesPerView
    )
  },
  methods: {
    readAllReviews(item) {
      this.selectedReview = item
      // const reviewsExpandContainerHeight =
      //   this.$refs.reviewsExpand?.$el.offsetHeight
      // this.$refs.reviewsSlider.$el.style = `height:${reviewsExpandContainerHeight}px`
      // console.log(this.$refs.reviewsExpand.clientHeight)
      const container = document.querySelector('.reviews__expand')
      console.log(container.getBoundingClientRect())
    },
    closeReviewsFull() {
      this.selectedReview = null
    },
    prevSlide() {
      this.swiper.slidePrev()
      this.activeSlideIndex = this.swiper.activeIndex + 1
    },
    nextSlide() {
      this.swiper.slideNext()
      this.activeSlideIndex = this.swiper.activeIndex + 1
    },
    getImage(url) {
      return require('@/assets/images' + url)
    },
  },
}
</script>
