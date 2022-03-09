<template>
  <div class="catalog__model">
    <div class="catalog__model-top">
      <h6 class="catalog__model-title">Модель:</h6>
      <div class="catalog__model-buttons">
        <button
          class="catalog__model-btn catalog__model-prev"
          @click="prevSlide"
        >
          <img src="@/assets/images/icons/left-arrow.svg" alt="" />
        </button>
        <button
          class="catalog__model-btn catalog__model-next"
          @click="nextSlide"
        >
          <img src="@/assets/images/icons/right-arrow.svg" alt="" />
        </button>
      </div>
    </div>
    <div
      class="catalog__model-slider"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + 'px' }"
    >
      <div v-for="item in 12" :key="item" class="catalog__model-item">
        <icon-classic />
      </div>
    </div>
  </div>
</template>

<script>
import IconClassic from '~/components/icons/constructor-icons/IconClassic.vue'
export default {
  name: 'CatalogModel',
  components: {
    IconClassic,
  },
  data() {
    return {
      currentSlideIndex: 0,
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
        console.log(this.currentSlideIndex)
      }
    },
    nextSlide() {
      this.currentSlideIndex++
      console.log(this.currentSlideIndex)
    },
  },
}
</script>