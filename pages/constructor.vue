<template>
  <section class="constructor">
    <div class="container">
      <h3 class="intro__title constructor__title">
        Каждый аксессуар O bag – это конструктор!
      </h3>
      <div class="constructor__inner">
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-classic />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-mini />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-urban />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-pocket />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-glam />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-reverse />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-queen />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-sharm />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
        <div class="constructor__item">
          <div class="constructor__item-images">
            <icon-market />
          </div>
          <p class="constructor__item-title">O bag classic</p>
        </div>
      </div>
      <div v-if="selectedConfiguratorMenu" class="constructor__buttons">
        <button
          v-for="(constructor, index) in productConstructor.configurator"
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
            <div class="constructor__card-buttons">
              <button class="constructor__card-arrow constructor__card-prev">
                Предыдущий <icon-arrow-prev />
              </button>
              <button class="constructor__card-arrow constructor__card-next">
                <icon-arrow-next /> Следующий
              </button>
            </div>
            <button
              class="constructor__card-btn page__border-btn"
              @click="removeElements"
            >
              Сбросить
            </button>
          </div>
          <div class="constructor__selected">
            <h6 class="constructor__selected-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>
            <app-parts-card v-for="selected in selectedElements.id" :key="selected.id" :item="selected"/>
            <div class="constructor__selected-total">
              <p class="constructor__selected-text">Всего:</p>
              <p class="constructor__selected-number">
                {{totalAll}}
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
              v-for="element in selectedConfiguratorMenu.elements"
              :key="element.id"
              class="constructor__elements-item"
              @click="addBackground(element)"
            >
              <img :src="element.previewImage" alt="" />
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
import IconClassic from '~/components/icons/constructor-icons/IconClassic.vue'
import IconGlam from '~/components/icons/constructor-icons/IconGlam.vue'
import IconMarket from '~/components/icons/constructor-icons/IconMarket.vue'
import IconMini from '~/components/icons/constructor-icons/IconMini.vue'
import IconPocket from '~/components/icons/constructor-icons/IconPocket.vue'
import IconQueen from '~/components/icons/constructor-icons/IconQueen.vue'
import IconReverse from '~/components/icons/constructor-icons/IconReverse.vue'
import IconSharm from '~/components/icons/constructor-icons/IconSharm.vue'
import IconUrban from '~/components/icons/constructor-icons/IconUrban.vue'
import IconArrowNext from '~/components/icons/slider-arrows/IconArrowNext.vue'
import IconArrowPrev from '~/components/icons/slider-arrows/IconArrowPrev.vue'
import AppPartsCard from '~/components/cards/AppPartsCard.vue'

export default {
  name: 'ConstructorPage',
  components: {
    IconClassic,
    IconGlam,
    IconMarket,
    IconMini,
    IconPocket,
    IconQueen,
    IconReverse,
    IconSharm,
    IconUrban,
    IconArrowNext,
    IconArrowPrev,
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

      totalAll: '',
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

      productConstructor: {
        initImage: 'imgmain.jpg',
        configurator: [
          {
            id: 1,
            title: 'Корпуса',
            elements: [
              {
                id: 1,
                title: 'Element 1 korpus',
                order: 6,
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Classic/Body/OBAGB001_EVS93_717_NOTAG_UNICA_L1-150x150.webp',
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Body/OBAGB001_EVS93_717_NOTAG_UNICA_L1-655x655.webp',
                ],

                price: '1220',
              },
              {
                id: 1,
                title: 'Element 1 korpus',
                order: 6,
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Classic/Body/OBAGB001_EVS00_055_NOTAG_UNICA_L1-150x150.webp',
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Body/OBAGB001_EVS00_055_NOTAG_UNICA_100_obag-655x655.webp',
                ],
                price: '1200',
              },
            ],
          },
          {
            id: 2,
            title: 'Ручки',
            elements: [
              {
                id: 2,
                title: 'Element ',
                order: 1,
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Handel-short/HLESPD03_ECSK6_371-150x150.webp',
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_ECSK6_371-classic-2-655x655.webp',
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_ECSK6_371-classic-1-655x655.webp'
                ],
                price: '1020',
              },
              {
                id: 2,
                title: 'Element ',
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Handel-long/HLESPD03_ECSK6_587-150x150.webp',
                  order: 1,
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_ECSK6_587-CLASSIC-2-655x655.webp',
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_ECSK6_587-CLASSIC-1-655x655.webp'
                ],
                price: '1200',
              },
            ],
          },
          {
            id: 3,
            title: 'Подкладки',
            elements: [
              {
                id: 1,
                title: 'Element ',
                order: 3,
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Classic/Inner/OBAGS901_ECSM6_132_NOTAG_UNICA_L1-150x150.webp',
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Inner/OBAGS901_ECSM6_132-655x655.webp',
                ],
                price: '1000',
              },
              {
                id: 1,
                title: 'Element ',
                order: 3,
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Classic/Inner/OBAGS901_TESZH_752-150x150.webp',
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Inner/OBAGS901_TESZH_752-655x655.webp',
                ],
                price: '220',
              },
            ],
          },
          {
            id: 4,
            title: 'Аксессуары',
            elements: [
              {
                id: 1,
                title: 'Element ',
                order: 4,
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Classic/Trim/OBAGT001_TESBK_137_NOTAG_UNICA_L1-150x150.webp',
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_TESBK_137_NOTAG_UNICA_120_obag-655x655.webp',
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_TESBK_137_NOTAG_UNICA_160_obag-655x655.webp',
                ],
                price: '1320',
              },
              {
                id: 1,
                title: 'Element ',
                order: 4,
                previewImage:
                  'https://obag.ua/image/cache/wp/gj/Classic/Trim/OBAGT001_FAS30_018-150x150.webp',
                images: [
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_FAS30_018_2-655x655.webp',
                  'https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_FAS30_018-655x655.webp',
                ],
                price: '1240',
              },
            ],
          },
        ],
      },
    }
  },
  mounted() {
    this.selectedConfiguratorMenu = this.productConstructor.configurator[0]
  },
  methods: {
    selectConfiguratorMenu(configuratorItem) {
      this.selectedConfiguratorMenu = configuratorItem
    },
    addBackground(element) {
      // console.log(element)
       const url = [];
      element.images.forEach((e) => {
       
          url.push(`url(${e})`)
      
        // if (element.images.length ===1) {
        //   this.configuratorBg[this.selectedConfiguratorMenu.id]=(`url(${e})`)
        // } else {
        //   this.configuratorBg[this.selectedConfiguratorMenu.id]+=`url(${e})`)
        // }
        // this.configuratorBg[this.selectedConfiguratorMenu.id]+=(`url(${e})`)
        // this.backgroundImages += `url(${e}),`
      })
          this.$set(this.configuratorBg, this.selectedConfiguratorMenu.id, url.join(','))


      
    // добавление картинки
      this.configuratorImg = Object.values(this.configuratorBg)
      this.configuratorImg.reverse((previousValue, currentValue) => previousValue + currentValue, 0)
      this.backgroundImages = this.configuratorImg.join();
      // console.log(this.configuratorImg)
      // console.log(this.backgroundImages)
      

    // выбранные элементы
      this.$set(this.selectedElements, this.selectedConfiguratorMenu.id, element )
      this.selectedElements = Object.values(this.selectedElements)
      console.log(this.selectedElements)

    // итоговая цена
      this.$set(this.priceElement, this.selectedConfiguratorMenu.id, element.price )
      this.totalElement = Object.values(this.priceElement)
      this.totalAll = this.totalElement.reduce(function(sum, el) {
        return Number(sum) + Number(el)
      })
      // console.log(this.totalAll)
    },





    removeElements() {      
      this.backgroundImages =
        'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp'
    },
  },
}
</script>