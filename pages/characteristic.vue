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
            <div class="modal-3" v-if="modal3">
              <div class="modal-3-overlay">
                <div class="modal-custom">
                  <div class="close" @click="modal3 = false">X</div>
                  <input type="text" v-model="name" placeholder="Имя" />
                  <input type="text" v-model="phone" placeholder="Телефон" />
                  <button @click="notify">Отправить</button>
                </div>
              </div>
            </div>
            <div class="modal-4" v-if="modal4">
              <div class="modal-4-overlay">
                <div class="modal-custom">
                  <div class="close" @click="modal4 = false">X</div>

                  <h6>Операция прошла успешно!</h6> 
                </div>
              </div>
            </div>
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
              <div class="modal-2" v-if="modal2">
                <div class="modal-2-overlay">
                  <div class="modal-custom">
                    <div class="close" @click="modal2 = false">X</div>
                    <h6>Операция прошла успешно!</h6>
                  </div>
                </div>
              </div>
              <div v-if="modal" class="modal-overlay">
                <div class="modal-custom">
                  <div class="close" @click="modal = false">X</div>
                  <h6>Заказать в 1 клик!</h6>
                  <!-- <form @submit="order"> -->
                  <input
                    type="text"
                    v-model="phone"
                    placeholder="Эл.почта/номер телефона"
                  />
                  <input type="text" v-model="name" placeholder="Имя" />
                  <button @click="order">Отправить</button>
                  <!-- </form> -->
                </div>
              </div>
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
      modal: '',
      modal2: '',
      modal3: '',
      modal4: '',
      name: '',
      phone: '',
      res: '',
      ip: '',
      showAccordionFirst: true,
      showAccordionSecond: false,
    }
  },
  methods: {
    async notify() {
      await this.$axios
        .post(' https://bag.a-lux.dev/api/notify', {
          phone: this.phone,
          name: this.name,
        })
        .then((response) => {
          console.log(response)
          this.modal3 = false
          this.modal4 = true
          // this.res = response.message
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async order() {
      await this.$axios
        .post('https://bag.a-lux.dev/api/order-callback', {
          phone: this.phone,
          name: this.name,
        })
        .then((response) => {
          console.log(response)
          this.modal = false
          this.modal2 = true
          // this.res = response.message
        })
        .catch((err) => {
          console.log(err)
        })
    },
    toggleShowAccordionFirst() {
      this.showAccordionFirst = !this.showAccordionFirst
    },
    toggleShowAccordionSecond() {
      this.showAccordionSecond = !this.showAccordionSecond
    },
  },
  // created(){
  //   return this.order()
  // }
}
</script>

<style scoped>

.modal-overlay,
.modal-4-overlay,
.modal-2-overlay,
.modal-3-overlay{
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  background-color: #000000da;
}
input {
  display: block;
  margin: 0 auto;
  width: 337px;
  border-radius: 13px;
  border: 1px solid black;
  padding: 9px 5px;
  /* margin: 12px; */
  margin-bottom: 24px;
  /* padding: 20px; */
  margin-top: 30px;
}
.modal-custom {
  text-align: center;
  background-color: white;
  height: 300px;
  width: 500px;
  margin: 0 auto;
  padding: 36px;
  margin-top: 10%;
  border-radius: 20px;
}
.close {
  cursor: pointer;
  text-align: right;
}

.modal-overlay .close-img {
  width: 25px;
}

.modal-overlay .check {
  width: 150px;
}
.modal-2 h6 {
  text-align: center;
  margin: 0 auto;
}
.modal-overlay h6,
.modal-3-overlay h6,
.modal-4-overlay h6,
.modal-2-overlay h6 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 132%;
  /* identical to box height, or 24px */

  /* Черный */

  color: #3d3935;
}

.modal-overlay,
.modal-3-overlay,
.modal-4-overlay,
.modal-2-overlay p {
  font-size: 16px;
  /* margin: 20px 0; */
}

.modal-overlay button,
.modal-4-overlay button,
.modal-3-overlay button,
.modal-2-overlay button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
}

.order-btn {
  font-size: 14px;
  line-height: 21px;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  color: #d05871;
  padding-left: 32px;
  position: relative;
  margin-bottom: 24px;
}
</style>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
