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
      <div class="constructor__buttons">
        <button class="constructor__btn page__border-btn" >Назад</button>
        <button class="constructor__btn page__border-btn" :class="{'active':corpShow}" @click="corpBtn">Корпуса</button>
        <button class="constructor__btn page__border-btn" :class="{'active':handleShow}" @click="handleBtn">Ручки</button>
        <button class="constructor__btn page__border-btn" :class="{'active':liningShow}" @click="liningBtn">Подкладки</button>
        <button class="constructor__btn page__border-btn" :class="{'active':accessoriesShow}" @click="accessoriesBtn">Аксессуары</button>
      </div>
      <div class="constructor__container">
        <div class="constructor__product">
          <h3 class="constructor__product-title">O bag Classic</h3>
          <div class="constructor__card">
            <div class="constructor__card-img" :style="{backgroundImage:` ${cardBg + handleBg + liningsBg + accessoriesBg  + corpBg}`}">
            </div>
            <div class="constructor__card-buttons">
              <button class="constructor__card-arrow constructor__card-prev">
                Предыдущий <icon-arrow-prev />
              </button>
              <button class="constructor__card-arrow constructor__card-next">
                <icon-arrow-next /> Следующий
              </button>
            </div>
            <button class="constructor__card-btn page__border-btn" @click="removeElements">
              Сбросить
            </button>
          </div>
          <div class="constructor__selected">
            <h6 class="constructor__selected-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>
            <app-parts-card v-for="item in 2" :key="item" />
            <div class="constructor__selected-total">
              <p class="constructor__selected-text">Всего:</p>
              <p class="constructor__selected-number">4766.20 грн.</p>
            </div>
            <button class="constructor__selected-btn">В корзину</button>
          </div>
        </div>
        <div class="constructor__elements">
          <h6 class="constructor__elements-title">ВЫБРАННЫЕ ЭЛЕМЕНТЫ</h6>
          <div v-if="corpShow" class="constructor__elements-inner">
            <div v-for="corp in corps" :key="corp.id" class="constructor__elements-item" @click="addCorp(corp)">
              <h6>
                {{corp.title}}
              </h6>
              <img :src="corp.image" alt="">
              <p class="constructor__elements-price">
                {{corp.price}}
              </p>
            </div>
          </div>
          <div v-if="handleShow" class="constructor__elements-inner">
            <div v-for="handle in handles" :key="handle.id" class="constructor__elements-item" @click="addHandle(handle)">
              <h6>
                {{handle.title}}
              </h6>
              <img :src="handle.image" alt="">
              <p class="constructor__elements-price">
                {{handle.price}}
              </p>
            </div>
          </div>
          <div v-if="liningsShow" class="constructor__elements-inner">
            <div v-for="lining in linings" :key="lining.id" class="constructor__elements-item" @click="addLinings(lining)">
              <h6>
                {{lining.title}}
              </h6>
              <img :src="lining.image" alt="">
              <p class="constructor__elements-price">
                {{lining.price}}
              </p>
            </div>
          </div>
          <div v-if="accessoriesShow" class="constructor__elements-inner">
            <div v-for="accessory in accessories" :key="accessory.id" class="constructor__elements-item" @click="addAccessories(accessory)">
              <h6>
                {{accessory.title}}
              </h6>
              <img :src="accessory.image" alt="">
              <p class="constructor__elements-price">
                {{accessory.price}}
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
      cardBg: 'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp)',
      corpBg: '',
      corpShow: true,
      handleBg: '',
      handleShow: false,
      liningsBg: '',
      liningsShow: false,
      accessoriesBg: '',
      accessoriesShow: false,
      total: 0,
      result: [],

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
      corps: [
        {
          id: 1,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Body/OBAGB001_EVS00_055_NOTAG_UNICA_L1-150x150.webp',
          price: 1400,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Body/OBAGB001_EVS00_055_NOTAG_UNICA_100_obag-655x655.webp")'
        },
        {
          id: 2,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Body/OBAGB001_EVS00_132_NOTAG_UNICA_L1-150x150.webp',
          price: 1450,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Body/OBAGB001_EVS00_132_NOTAG_UNICA_100_obag-655x655.webp")'
        },
        {
          id: 3,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Body/OBAGB001_EVS00_786-150x150.webp',
          price: 1000,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Body/OBAGB001_EVS00_786-655x655.webp")'
        },
      ],
      handles: [
        {
          id: 4,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Handel-long/HLESPD03_ECSK6_587-150x150.webp',
          price: 1000,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_ECSK6_587-CLASSIC-1-655x655.webp"), url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_ECSK6_587-CLASSIC-2-655x655.webp"),'
        },
        {
          id: 5,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Handel-short/HLESX800_ECS00_039_NOTAG_UNICA_L1-150x150.webp',
          price: 1000,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESX800_ECS00_039_classic_1-655x655.webp"), url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESX800_ECS00_039_classic_2-655x655.webp"),'
        },
        {
          id: 6,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Handel-short/HLESPD03_ECSK6_587-150x150.webp',
          price: 1000,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_TESZF_132-classic-1-655x655.webp"), url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Short-handel/HLESPD03_TESZF_132-classic-2-655x655.webp"),'
        },
      ],
      linings: [
        {
          id: 7,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Inner/OBAGS901_ECSM6_132_NOTAG_UNICA_L1-150x150.webp',
          price: 1000,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Inner/OBAGS901_ECSM6_132-655x655.webp"),'
        },
        {
          id: 8,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Inner/OBAGS901_TESZH_751-150x150.webp',
          price: 1000,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Inner/OBAGS901_TESZH_751-655x655.webp"),'
        },
        {
          id: 8,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Inner/OBAGS901_TESZH_752-150x150.webp',
          price: 1000,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Inner/OBAGS901_TESZH_752-655x655.webp"),'
        },
      ],
      accessories: [
        {
          id: 9,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Trim/OBAGT001_TESBK_137_NOTAG_UNICA_L1-150x150.webp',
          price: 1900,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_TESBK_137_NOTAG_UNICA_160_obag-655x655.webp"), url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_TESBK_137_NOTAG_UNICA_120_obag-655x655.webp"),'
        },
        {
          id: 10,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Trim/OBAGT001_TESCK_019_NOTAG_UNICA_L1-150x150.webp',
          price: 1900,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_TESCK_019_NOTAG_UNICA_160_obag-655x655.webp"), url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_TESCK_019_NOTAG_UNICA_120_obag-655x655.webp"),'
        },
        {
          id: 11,
          title: '',
          image: 'https://obag.ua/image/cache/wp/gj/Classic/Trim/OBAGT001_FAS30_018-150x150.webp',
          price: 1900,
          bg: 'url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_FAS30_018-655x655.webp"), url("https://obag.ua/image/cache/wp/gp/Constructor/Classic/Trim/OBAGT001_FAS30_018_2-655x655.webp"),'
        },
        
      ],
    }
  },
  methods: {
    corpBtn() {
      this.corpShow = true;
      this.handleShow = false;
      this.liningsShow = false;
      this.accessoriesShow = false;
    },

    handleBtn() {
      this.corpShow = false;
      this.handleShow = true;
      this.liningsShow = false;
      this.accessoriesShow = false;
    },

    liningBtn() {
      this.corpShow = false;
      this.handleShow = false;
      this.liningsShow = true;
      this.accessoriesShow = false;
    },

    accessoriesBtn() {
      this.corpShow = false;
      this.handleShow = false;
      this.liningsShow = false;
      this.accessoriesShow = true;
    },

    addCorp(element) {
      this.cardBg = '';
      this.corpBg = element.bg;
      this.corpPrice = element.price;
      this.result.push(this.corpPrice);
      console.log(this.corpBg)
    },
    addHandle(element) {
      this.cardBg = '';
      this.handleBg = element.bg;
      this.handlePrice = element.price;
      this.result.push(this.handlePrice);
      console.log(this.handleBg)
    },
    addLinings(element) {
      this.cardBg = '';
      this.liningsBg = element.bg;
      this.liningsPrice = element.price;
      this.result.push(this.liningsPrice);
      console.log(this.liningsBg)
    },
    addAccessories(element) {
      this.cardBg = '';
      this.accessoriesBg = element.bg;
      this.accessoriesPrice = element.price;
      this.result.push(this.accessoriesPrice);
      console.log(this.accessoriesBg)
    },
    removeElements() {
      this.corpBg = '';
       this.handleBg = '';
      this.liningsBg = '';
      this.accessoriesBg = '';
      this.cardBg = 'url(https://obag.ua/image/cache/wp/gp/category_constructor/config_obag-655x655.webp)';
     
    }
  }
}
</script>