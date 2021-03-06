<template>
  <section class="constructor">
    <div class="container">
      <h3
        class="intro__title constructor__title"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        Каждый аксессуар O bag – это конструктор!
      </h3>

      <!-- category tabs -->
      <div class="constructor__top">
        <button
          v-for="category in productType"
          :key="category.id"
          class="constructor__top-btn"
          :class="{ active: selectedCategory.id === category.id }"
          @click="handleSelectCategory(category)"
        >
          {{ category.title }}
        </button>
      </div>

      <!-- subcategory tabs -->
      <div v-if="selectedCategory" class="constructor__inner">
        <div
          v-for="subcategory in selectedCategory.constructor"
          :key="subcategory.id"
          class="constructor__item"
          @click="handleSelectSubcategory(subcategory.id)"
        >
          <div class="constructor__item-images">
            <img
              :src="
                selectedSubcategory.id === subcategory.id
                  ? subcategory.image
                  : subcategory.preview_image
              "
              alt=""
            />
          </div>
          <p class="constructor__item-title">
            {{ subcategory.title }}
          </p>
        </div>
      </div>

      <!-- parts block -->
      <div v-if="selectedSubcategory" class="constructor__buttons">
        <button
          v-for="part in selectedSubcategory.categories"
          :key="part.id"
          class="constructor__btn page__border-btn"
          :class="{ active: part.id === selectedPart.id }"
          @click="handleSelectParts(part)"
        >
          {{ part.title }}
        </button>
      </div>

      <div class="constructor__container">
        <div class="constructor__product">
          <h3 class="constructor__product-title">
            {{ selectedSubcategory.title }}
          </h3>
          <div class="constructor__card">
            <div
              ref="obagConstuctor"
              class="constructor__card-img"
              :style="getBackgroundImage"
            ></div>
            <button
              class="constructor__card-btn page__border-btn"
              @click="clearElements"
            >
              Сбросить
            </button>
          </div>
          <div class="constructor__selected">
            <h6 class="constructor__selected-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>
            <app-parts-card
              v-for="selected in getSelectedElements"
              :key="selected.id"
              :item="selected"
            />
            <div class="constructor__selected-total">
              <p class="constructor__selected-text">Всего:</p>
              <p class="constructor__selected-number">
                {{ numberWithSpaces(getTotalPrice) }} ₸
              </p>
            </div>
            <button
              class="constructor__selected-btn"
              @click="addElementsToCart"
            >
              В корзину
            </button>
          </div>
        </div>
        <div class="constructor__elements">
          <h6 class="constructor__elements-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>

          <div v-if="selectedPart" class="constructor__elements-inner">
            <div
              v-for="element in selectedPart.constructorElements"
              :key="element.id"
              class="constructor__elements-item"
              @click="handleSelectElement(element)"
            >
              <img :src="element.image" alt="" />
              <p class="constructor__elements-price">
                {{ numberWithSpaces(element.price) }} ₸
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MetaSeo from '@/mixins/MetaSeo.vue'

import { actionTypes } from '@/store/product-constructor'
import { actionTypes as cartActionTypes } from '~/store/cart'
import { numberWithSpaces } from '~/helpers/utils'
import AppPartsCard from '~/components/cards/AppPartsCard.vue'

export default {
  name: 'ConstructorPage',
  components: {
    AppPartsCard,
  },
  mixins: [MetaSeo],
  data() {
    return {
      selectedCategory: {},
      selectedSubcategory: {},
      selectedPart: null,
      selectedElementsObject: {},

      orderedBackgroundImages: null,
      backgroundImagesArray: [],
      backgroundReplacements: {
        sumki: 'constructor-bags-replacement.webp',
        ryukzaki: 'constructor-bags-replacement.webp',
        casy: 'constructor-clock-replacement.webp',
        aksesuary: 'constructor-glasses-replacement.webp',
      },
      initBackgroundImage: 'constructor-bags-replacement.webp',
    }
  },
  computed: {
    ...mapState('product-constructor', ['productCategory']),
    ...mapState('product-constructor', ['productType']),
    getBackgroundImage() {
      if (this.initBackgroundImage) {
        return `background-image: url(${this.requireAssetImage(
          this.initBackgroundImage
        )})`
      }

      const background = this.backgroundImagesArray
        .filter((element) => element !== '')
        .join()
      return `background-image: ${background}`
    },
    getSelectedElements() {
      return Object.values(this.selectedElementsObject)
    },
    getTotalPrice() {
      let sum = 0
      this.getSelectedElements.forEach((item) => (sum += item.price))
      return String(sum)
    },
  },
  mounted() {
    this.getCategories().then((categories) => {
      this.handleSelectCategory(categories[0])
    })
  },
  methods: {
    ...mapActions('product-constructor', {
      getCategories: actionTypes.loadType,
      getSubcategories: actionTypes.loadCategory,
    }),
    ...mapActions('cart', {
      addElements: cartActionTypes.addProduct,
    }),
    numberWithSpaces,

    requireAssetImage(path) {
      return require('@/assets/images/constructor/' + path)
    },

    handleSelectCategory(item) {
      this.clearElements()
      this.selectedCategory = item
      this.handleSelectSubcategory(item.constructor[0].id)
    },

    handleSelectSubcategory(id) {
      this.clearElements()
      this.getSubcategories(id).then((subcategory) => {
        this.selectedSubcategory = subcategory?.constructor
      })
    },

    handleSelectParts(part) {
      this.selectedPart = part
    },

    handleSelectElement(element) {
      this.initBackgroundImage = null
      const backgroundImagesUrl = []

      // change the background
      element?.images?.forEach((e) => {
        backgroundImagesUrl.push(`url(${e})`)
      })
      this.$set(
        this.orderedBackgroundImages,
        this.selectedPart.type,
        backgroundImagesUrl.reverse().join(',')
      )
      this.backgroundImagesArray = Object.values(this.orderedBackgroundImages)

      // выбранные элементы
      this.$set(this.selectedElementsObject, this.selectedPart.id, element)
    },

    addElementsToCart() {
      this.getSelectedElements.forEach((e) => {
        this.addElements(e)
      })
      if (this.getSelectedElements.length > 0) {
        this.clearElements()
        alert('Детали добавлены в корзину')
      }
    },

    loadBackground() {
      const type = this.selectedCategory.type
      this.initBackgroundImage = type
        ? this.backgroundReplacements[type]
        : this.backgroundReplacements.sumki

      switch (type) {
        case 'sumki':
          this.orderedBackgroundImages = {
            ruchki: '',
            acessory: '',
            remni: '',
            kryshki: '',
            podkladki: '',
            korpusa: '',
          }
          break
        case 'ryukzaki':
          this.orderedBackgroundImages = {}
          break
        case 'casy':
          this.orderedBackgroundImages = {
            ciferblaty: '',
            remeshki: '',
          }
          break
        case 'aksesuary':
          this.orderedBackgroundImages = {}
          break
        default:
          this.orderedBackgroundImages = {}
          break
      }
    },

    clearElements() {
      this.selectedPart = {}
      this.selectedElementsObject = {}
      this.loadBackground()
    },
  },
}
</script>
