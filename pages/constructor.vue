<template>
  <section class="constructor">
    <div class="container">
      <h3 class="intro__title constructor__title">
        Каждый аксессуар O bag – это конструктор!
      </h3>
      <div v-if="productType" class="constructor__inner">
         <div v-for="item in productType"  :key="item.id" class="constructor__item" :class="{active : selectedType.id === item.id}" @click="getTypesProducts(item)">
          <div class="constructor__item-images">
            <img :src="item.square_image" alt="">
          </div>
          <p class="constructor__item-title">
            {{item.title}}
          </p>
        </div>
      </div>
      <div v-if="selectedConfiguratorMenu" class="constructor__buttons">
        <button class="constructor__btn page__border-btn" @click="removeElements">Назад</button>
        <button
          v-for="(constructor, index) in productConstructor.categories"
          :key="index"
          class="constructor__btn page__border-btn"
          :class="{ active: constructor.id === selectedConfiguratorMenu.id }"
          @click="selectConfiguratorMenu(constructor)"
        >
          {{ constructor.title }}
        </button>
      </div>
      <div class="constructor__container">
        <div class="constructor__product">
          <h3 class="constructor__product-title">O bag Classic</h3>
          <div class="constructor__card">
            <div
              ref="obagConstuctor"
              class="constructor__card-img"
              :style="{ backgroundImage: `${backgroundImages}` }"
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
              v-for="selected in selectedElements"
              :key="selected.id"
              :item="selected"
            />
            <div class="constructor__selected-total">
              <p class="constructor__selected-text">Всего:</p>
              <p class="constructor__selected-number">
                {{ totalAll }}
              </p>
            </div>
            <button class="constructor__selected-btn">В корзину</button>
          </div>
        </div>
        <div class="constructor__elements">
          <h6 class="constructor__elements-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>
          <div
            v-if="selectedConfiguratorMenu"
            class="constructor__elements-inner"
          >
            <div
              v-for="element in selectedConfiguratorMenu.constructor_elements"
              :key="element.id"
              class="constructor__elements-item"
              @click="addBackground(element)"
            >
              <img :src="element.preview_image" alt="" />
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
import {mapActions, mapState} from 'vuex'
import{actionTypes} from '@/store/product-constructor';

import AppPartsCard from '~/components/cards/AppPartsCard.vue'

export default {
  name: 'ConstructorPage',
  components: {
    AppPartsCard,
  },
  data() {
    return {
      selectedConfiguratorMenu: null,
      configuratorBg: {},
      configuratorImg: [],
      sortImg: [],
      priceElement: {},
      totalElement: [],
      selectedObject: {},
      selectedElements: [],
      selectedType: {},
      // productConstructor: null,

      totalAll: '0',
      backgroundImages:
        'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp',

      items: [
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
        {
          title: 'Женская сумка O bag Unique Сангрия',
          priceOld: '1990.00 грн.',
          priceNew: '1393.00 грн',
          image:
            'https://www.freepngimg.com/thumb/anime/120089-uchiha-madara-free-download-image.png',
        },
      ],
      
    }
  },
  computed: {
    ...mapState('product-constructor', [
      'productConstructor'
    ]),
    ...mapState('product-constructor', [
      'productType'
    ]),
  },
  mounted() {
    this.getTypes().then((types)=> {
    this.selectedType = types[0]
    })
    
    this.getConstructor('urban').then(()=> {
      this.selectedConfiguratorMenu = this.productConstructor.categories[0]
    });
  },
  methods: {
    ...mapActions('product-constructor', {getTypes:actionTypes.loadType}),
    ...mapActions('product-constructor', {getConstructor:actionTypes.loadConstructor}),

    getTypesProducts(item) {
      this.selectedType = item
      this.getConstructor(item.slug)
    },    

    selectConfiguratorMenu(configuratorItem) {
      this.selectedConfiguratorMenu = configuratorItem
      // console.log(this.selectedConfiguratorMenu.id)
    },
    addBackground(element) {
      const url = []
      element.images.forEach((e) => {
        url.push(`url(${e})`)
      })

      this.$set(
        this.configuratorBg,
        this.selectedConfiguratorMenu.id,
        url.join(',')
      )
      // if(this.selectedConfiguratorMenu.constructor_elements === element) {
      //   console.log('gavno')
      // }

      // switch (element.id) {
      //       case "":
      //           break;
      //       case "":
      //           break;
      //       case "":
      //           break;
      //   }      
      console.log(element.id)
      // добавление картинки
      this.configuratorImg = Object.values(this.configuratorBg)
      this.configuratorImg.reverse(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
      this.backgroundImages = this.configuratorImg.join()

      // выбранные элементы

      this.$set(
        this.selectedObject,
        this.selectedConfiguratorMenu.id,
        element
      )

      this.selectedElements = Object.values(this.selectedObject)
      // console.log(this.selectedElements)


      // итоговая цена
      this.$set(
        this.priceElement,
        this.selectedConfiguratorMenu.id,
        element.price
      )
      this.totalElement = Object.values(this.priceElement)
      this.totalAll = this.totalElement.reduce(function (sum, el) {
        return Number(sum) + Number(el)
      })
      // console.log(this.totalAll)
    },

    removeElements() {
      this.configuratorImg.shift()
      this.selectedElements.shift()
      this.totalElement.shift()
      this.backgroundImages = this.configuratorImg.join()
      if(this.configuratorImg.length === 0) {
        this.backgroundImages = 'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp';
        this.configuratorBg = []
      }
    },

    clearElements() {
      this.backgroundImages = 'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp';
      this.selectedObject = [];
      this.selectedElements = [];
      this.configuratorBg = [];
      this.priceElement = []
      this.totalAll = '0'
    },
  },
}
</script>