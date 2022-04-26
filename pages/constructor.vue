<template>
  <section class="constructor">
    <div class="container">
      <h3 class="intro__title constructor__title">
        Каждый аксессуар O bag – это конструктор!
      </h3>

      <div v-if="productType" class="constructor__inner">
        <div v-for="item in productType" :key="item.id" class="constructor__item"
          :class="{ active: selectedType.id === item.id }" @click="getTypesProducts(item)">
          <div class="constructor__item-images">
            <img :src="item.square_image" alt="" />
          </div>
          <p class="constructor__item-title">
            {{ item.title }}
          </p>
        </div>
      </div>

      <div v-if="selectedConfiguratorMenu" class="constructor__buttons">
        <button v-for="(constructor, index) in productConstructor.categories" :key="index"
          class="constructor__btn page__border-btn" :class="{ active: constructor.id === selectedConfiguratorMenu.id }"
          @click="selectConfiguratorMenu(constructor)">
          {{ constructor.title }}
        </button>
      </div>

      <div class="constructor__container">
        <div class="constructor__product">
          <h3 class="constructor__product-title">O bag Classic</h3>
          <div class="constructor__card">
            <div ref="obagConstuctor" class="constructor__card-img" :style="{
              backgroundImage: `${initBackgroundImage
                ? initBackgroundImage
                : backgroundImagesArray
                  .filter((element) => element !== '')
                  .join()
                }`,
            }"></div>
            <button class="constructor__card-btn page__border-btn" @click="clearElements">
              Сбросить
            </button>
          </div>
          <div class="constructor__selected">
            <h6 class="constructor__selected-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>
            <app-parts-card v-for="selected in selectedElements" :key="selected.id" :item="selected" />
            <div class="constructor__selected-total">
              <p class="constructor__selected-text">Всего:</p>
              <p class="constructor__selected-number">
                {{ totalAll }}
              </p>
            </div>
            <button class="constructor__selected-btn" @click="addElementsToCart">
              В корзину
            </button>
          </div>
        </div>
        <div class="constructor__elements">
          <h6 class="constructor__elements-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>
          <div v-if="selectedConfiguratorMenu" class="constructor__elements-inner">
            <div v-for="element in selectedConfiguratorMenu.constructor_elements" :key="element.id"
              class="constructor__elements-item" @click="addBackground(element)">
              <img :src="element.image" alt="" />
              <p class="constructor__elements-price">
                {{ element.price }}
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
import { actionTypes } from '@/store/product-constructor'
import { actionTypes as cartActionTypes } from '~/store/cart'

import AppPartsCard from '~/components/cards/AppPartsCard.vue'

export default {
  name: 'ConstructorPage',
  components: {
    AppPartsCard,
  },
  data() {
    return {
      selectedConfiguratorMenu: null,
      orderedBackgroundImages: {
        handle: '',
        lining: '',
        acessory: '',
        body: '',
      },
      lastElement: null,
      backgroundImagesArray: [],
      priceElement: {},
      totalElement: [],
      selectedObject: {},
      selectedElements: [],
      selectedType: {},
      firstAddedKey: null,
      // productConstructor: null,

      totalAll: '0',
      initBackgroundImage:
        'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp',
      backgroundImages: '',
    }
  },
  computed: {
    ...mapState('product-constructor', ['productConstructor']),
    ...mapState('product-constructor', ['productType']),
  },
  watch: {
    orderedBackgroundImages: {
      deep: true,
      handler() {
        // console.log(this.selectedElements)

        this.backgroundImagesArray = Object.values(this.orderedBackgroundImages)

        this.selectedElements = Object.values(this.selectedObject)

        this.totalAll = this.totalElement.reduce(function (sum, el) {
          return Number(sum) + Number(el)
        }, 0)
      },
    },
  },
  mounted() {
    this.getTypes().then((types) => {
      this.selectedType = types[0]
    })

    this.getConstructor('bags').then(() => {
      this.selectedConfiguratorMenu = this.productConstructor.categories[0]
    })
  },
  methods: {
    ...mapActions('product-constructor', { getTypes: actionTypes.loadType }),
    ...mapActions('product-constructor', {
      getConstructor: actionTypes.loadConstructor,
    }),
    ...mapActions('cart', {
      addElements: cartActionTypes.addProduct,
    }),

    getTypesProducts(item) {
      this.clearElements()
      this.selectedType = item
      this.getConstructor(item.slug).then(() => {
        if (this.productConstructor?.categories?.length) {
          this.selectedConfiguratorMenu = this.productConstructor?.categories[0]
        } else {
          this.selectedConfiguratorMenu = null
        }
      })
    },

    addElementsToCart() {
      this.selectedElements.forEach((e) => {
        this.addElements(e)
      })
      if (this.selectedElements.length > 0) {
        this.clearElements()
        alert('Детали добавлены в корзину')
      }
    },

    selectConfiguratorMenu(configuratorItem) {
      this.selectedConfiguratorMenu = configuratorItem
    },

    addBackground(element) {
      this.initBackgroundImage = null
      this.lastElement = element
      console.log(this.lastElement)

      const backgroundImagesUrl = []
      element.images.forEach((e) => {
        backgroundImagesUrl.push(`url(${e})`)
      })
      this.$set(
        this.orderedBackgroundImages,
        this.selectedConfiguratorMenu.type,
        backgroundImagesUrl.reverse().join(',')
      )

      // выбранные элементы
      this.$set(this.selectedObject, this.selectedConfiguratorMenu.id, element)

      // итоговая цена
      this.$set(
        this.priceElement,
        this.selectedConfiguratorMenu.id,
        element.price
      )
      this.totalElement = Object.values(this.priceElement)
    },

    removeElements(item) {
      // this.$delete(this.selectedObject, item)
      // this.totalElement.pop()

      // this.totalAll = this.totalElement.reduce(function (sum, el) {
      //     return Number(sum) + Number(el)
      //   }, 0) 
      // this.selectedElements.pop()
      // this.backgroundImagesArray.pop()
      console.log(item)
    },

    clearElements() {
      this.orderedBackgroundImages = {
        handle: '',
        lining: '',
        acessory: '',
        body: '',
      }
      this.totalElement = []
      this.selectedObject = {}
      this.initBackgroundImage =
        'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp'
    },
  },
}
</script>
