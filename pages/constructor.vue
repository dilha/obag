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
        <button class="constructor__btn page__border-btn">Назад</button>
        <button class="constructor__btn page__border-btn">Корпуса</button>
        <button class="constructor__btn page__border-btn">Ручки</button>
        <button class="constructor__btn page__border-btn">Подкладки</button>
        <button class="constructor__btn page__border-btn">Аксессуары</button>
      </div>
      <div class="constructor__container">
        <div class="constructor__product">
          <h3 class="constructor__product-title">O bag Classic</h3>
          <div class="constructor__card">
            <img
              class="constructor__card-img"
              src="@/assets/images/constructor/constructor-card.svg"
              alt=""
            />
            <div class="constructor__card-buttons">
              <button class="constructor__card-arrow constructor__card-prev">
                Предыдущий <icon-arrow-prev />
              </button>
              <button class="constructor__card-arrow constructor__card-next">
                <icon-arrow-next /> Следующий
              </button>
            </div>
            <button class="constructor__card-btn page__border-btn">
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
          <div class="constructor__elements-inner">
            <product-card v-for="item in items" :key="item" :item="item"/>
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
import ProductCard from '~/components/product/ProductCard.vue'
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
    ProductCard,
  },
  data() {
    return {
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
}
</script>