<template>
  <section class="characteristic">
    <div class="container">
      <div class="characteristic__inner">
        <div class="characteristic__product">
          <div class="characteristic__product-images">
            <img
              class="characteristic__product-img"
              src="@/assets/images/characteristic/characteristic-1.jpg"
              alt=""
            />
            <button class="characteristic__product-bookmark">
              <icon-bookmark />
            </button>
          </div>
          <div class="characteristic__product-inner">
            <app-parts-card v-for="(item, index) in 3" :key="index" />
          </div>
        </div>
        <div class="characteristic__content">
          <p class="characteristic__code">
            Код Товара: OBAGB001EVS00078-OBAGS901TESZS055-HLESR000ECSK6078
          </p>
          <h3 class="characteristic__title">
            Женская сумка O bag classic | корпус песок, подкладка дамаск,
            длинные ручки узел наппа
          </h3>
          <p class="characteristic__price">3870.00 грн.</p>
          <div class="characteristic__number">
            <p>Кол-во:</p>
            <div class="order__products-number characteristic__number-num">
              <button class="order__products-minus">
                <img src="@/assets/images/icons/minus-icon.svg" alt="" />
              </button>
              <p>1</p>
              <button class="order__products-plus">
                <img src="@/assets/images/icons/plus-icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="characteristic__buttons">
            <button class="characteristic__buy" @click="modal3 = true">
              Уведомить о поступлений
            </button>
            <a
              class="characteristic__link characteristic__link-constructor"
              href="#?"
            >
              Констуктор
            </a>
            <a class="characteristic__link characteristic__link-foto" href="#?">
              Запросить фото
            </a>
          </div>
          <div class="characteristic__info">
            <div class="characteristic__info-buttons">
              <button class="characteristic__info-btn active">
                Характеристики
              </button>
              <button class="characteristic__info-btn">Описание</button>
              <button class="characteristic__info-btn">Отзывы (0)</button>
              <a href="#" class="order-btn" @click="modal = true"
                >Заказать в 1 клик</a
              >
            </div>
            <div class="characteristic__info-content">
              <div class="characteristic__info-text">
                <p class="characteristic__info-bold">Цвет</p>
                <p class="characteristic__info-medium">Песок</p>
              </div>
              <div class="characteristic__info-text">
                <p class="characteristic__info-bold">Размер</p>
                <p class="characteristic__info-medium">
                  Корпус: высота - 31 см, ширина - 39 см, глубина - 14 см;
                  ручки: длина - 110 см
                </p>
              </div>
              <div class="characteristic__info-text">
                <p class="characteristic__info-bold">Состав</p>
                <p class="characteristic__info-medium">
                  Корпус: 100% XL EXTRALIGHT; подкладка: 50% полиуретан, 50%
                  полиэстер; ручки: полиэстер - 55%, полиуретан - 45%
                </p>
              </div>
              <div class="characteristic__info-text">
                <p class="characteristic__info-bold">Модель</p>
                <p class="characteristic__info-medium">O bag classic.</p>
              </div>
              <div class="characteristic__info-text">
                <p class="characteristic__info-bold">Категория</p>
                <p class="characteristic__info-medium">Сумка</p>
              </div>
            </div>
          </div>
          <div class="characteristic__accordion">
            <div
              class="characteristic__accordion-title"
              @click="toggleShowAccordionFirst"
            >
              Оплата и доставка
              <img
                class="characteristic__accordion-arrow"
                src="@/assets/images/icons/red-arrow.svg"
                alt=""
              />
            </div>
            <transition name="fade">
              <div
                v-if="showAccordionFirst"
                class="characteristic__accordion-text"
              >
                <p>Варианты оплаты заказа:</p>
                <ol>
                  <li>Оплата после получения</li>
                  <li>
                    Оплата через приложение WayForPay которое дает возможность
                    оплатить карточкой или оформить оплату частями от Monobank
                    или ПриватБанк
                  </li>
                </ol>
                <p>
                  Доставка осуществляется по территории Украины и может занимать
                  от 2 до 5 дней. На срок доставки могут повлиять праздничные
                  дни и периоды акций и распродаж, о чем мы сообщаем
                  дополнительно. Наша Служба по работе с клиентами работает
                  ежедневно. После размещения заказа на сайте, мы свяжемся с
                  вами и согласуем детали доставки, если иное не указано в
                  примечании к вашему заказу.
                </p>
              </div>
            </transition>
          </div>
          <div
            class="characteristic__accordion"
            @click="toggleShowAccordionSecond"
          >
            <div class="characteristic__accordion-title">
              Поддержка Клиентов
              <img
                class="characteristic__accordion-arrow"
                src="@/assets/images/icons/red-arrow.svg"
                alt=""
              />
            </div>
            <transition name="fade">
              <div
                v-if="showAccordionSecond"
                class="characteristic__accordion-text"
              >
                <p>Варианты оплаты заказа:</p>
                <ol>
                  <li>Оплата после получения</li>
                  <li>
                    Оплата через приложение WayForPay которое дает возможность
                    оплатить карточкой или оформить оплату частями от Monobank
                    или ПриватБанк
                  </li>
                </ol>
                <p>
                  Доставка осуществляется по территории Украины и может занимать
                  от 2 до 5 дней. На срок доставки могут повлиять праздничные
                  дни и периоды акций и распродаж, о чем мы сообщаем
                  дополнительно. Наша Служба по работе с клиентами работает
                  ежедневно. После размещения заказа на сайте, мы свяжемся с
                  вами и согласуем детали доставки, если иное не указано в
                  примечании к вашему заказу.
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconBookmark from '~/components/icons/IconBookmark.vue'
import AppPartsCard from '~/components/cards/AppPartsCard.vue'
export default {
  name: 'CharacteristicPage',
  components: {
    IconBookmark,
    AppPartsCard,
  },
  data() {
    return {
      showAccordionFirst: true,
      showAccordionSecond: false,
    }
  },
  methods: {
    toggleShowAccordionFirst() {
      this.showAccordionFirst = !this.showAccordionFirst
    },
    toggleShowAccordionSecond() {
      this.showAccordionSecond = !this.showAccordionSecond
    },
  },
}
</script>