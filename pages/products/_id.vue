<template>
  <section class="characteristic">
    <div class="container">
      <div class="characteristic__inner">
        <div class="characteristic__product">
          <div class="characteristic__product-images">
            <img
              class="characteristic__product-img"
              :src="product.image"
              :alt="product.title"
            />
            <button class="characteristic__product-bookmark">
              <icon-bookmark />
            </button>
          </div>
          <div class="characteristic__product-inner">
            <app-parts-card
              v-for="(item, index) in product.complete"
              :key="index"
              :item="item"
            />
          </div>
        </div>
        <div class="characteristic__content">
          <p class="characteristic__code">Код Товара: {{ product.code }}</p>
          <h3 class="characteristic__title">
            {{ product.title }}
          </h3>
          <p class="characteristic__price">
            {{ product.price }}
          </p>
          <div class="characteristic__number">
            <p>Кол-во:</p>
            <div class="order__products-number characteristic__number-num">
              <button class="order__products-minus" @click="minus">
                <img src="@/assets/images/icons/minus-icon.svg" alt="" />
              </button>
              <p>{{ quantity }}</p>
              <button class="order__products-plus" @click="plus">
                <img src="@/assets/images/icons/plus-icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="characteristic__buttons">
            <div v-if="isExist">
              <button class="characteristic__buy" @click="addProductCart">
                Купить
              </button>
            </div>
            <div v-if="!isExist">
              <button class="characteristic__buy" @click="modal3 = true">
                Уведомить о поступлении
              </button>
              <div class="modal-3" v-if="modal3">
                <div class="modal-3-overlay">
                  <div class="modal-custom">
                    <div class="close" @click="modal3 = false">X</div>
                    <!-- <input type="text" v-model="product_id" placeholder="ID товара" /> -->
                    <input type="text" v-model="email" placeholder="Почта" />
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
            </div>
            <nuxt-link
              to="/constructor"
              class="characteristic__link characteristic__link-constructor"
            >
              Конструктор
            </nuxt-link>
            <nuxt-link
              to="/shopping"
              class="characteristic__link characteristic__link-foto"
            >
              Запросить фото
            </nuxt-link>
          </div>
          <div class="characteristic__info">
            <div class="characteristic__info-buttons">
              <button
                v-for="(item, index) in productTubs"
                :key="index"
                class="characteristic__info-btn"
                :class="{ active: item.name === productInfo }"
                @click="selecProductInfo(item.name)"
              >
                {{ item.title }}
              </button>

              <a href="#" class="order-btn" @click="modal = true"
                >Заказать в 1 клик</a
              >
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
              <div class="modal-2" v-if="modal2">
                <div class="modal-2-overlay">
                  <div class="modal-custom">
                    <div class="close" @click="modal2 = false">X</div>
                    <h6>Операция прошла успешно!</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="characteristic__info-content">
              <div v-html="product[productInfo]"></div>
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
    <div></div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '~/store/cart'
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
      isExist: '',
      modal: '',
      modal2: '',
      modal3: '',
      modal4: '',
      // product_id:'',
      email: '',
      name: '',
      phone: '',
      showAccordionFirst: true,
      showAccordionSecond: false,
      product: {},
      isFavorite: false,
      productInfo: null,
      productPrice: [],
      quantity: 1,
      productTubs: [
        {
          id: 1,
          title: 'Характеристики',
          name: 'characteristics',
        },
        {
          id: 2,
          title: 'Описание',
          name: 'description',
        },
        {
          id: 3,
          title: 'Отзывы',
          name: 'reviews.text',
        },
      ],
    }
  },
  mounted() {
    console.log(this.$route, this.$router)
    if (this.$route?.params?.id) {
      this.getProducts(this.$route?.params?.id)
      // this.notify(this.$route?.params?.id)
    }
    this.productInfo = this.productTubs[0].name
  },
  methods: {
    async order() {
      await this.$axios
        .post('order-callback', {
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
    ...mapActions('cart', { addProductToCart: actionTypes.addProduct }),

    selecProductInfo(selectInfo) {
      this.productInfo = selectInfo
      console.log(this.productInfo)
    },

    toggleShowAccordionFirst() {
      this.showAccordionFirst = !this.showAccordionFirst
    },
    toggleShowAccordionSecond() {
      this.showAccordionSecond = !this.showAccordionSecond
    },
    getProducts(id) {
      this.$api.get(`/product/${id}`).then((res) => {
        console.log(res)
        this.product = res.data.product
        if (res.data.product.available === 0) {
          this.isExist = true
        } else this.isExist = false
      })
    },
    async notify(id) {
      await this.$axios
        .post('/notify', {
          product_id: this.$route.params.id,
          email: this.email,
        })
        .then((response) => {
          if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) //eslint-disable-line
          ) {
    
            this.modal3 = false
            this.modal4 = true
          } else {
            alert('Введите коректный email')
          }
          console.log(response)
          console.log(id)

          // this.res = response.message
        })
        .catch((err) => {
          console.log(err)
        })
    },
    minus() {
      if (this.quantity === 1) {
        this.quantity = 1
      } else {
        this.quantity--
      }
    },
    plus() {
      this.quantity++
    },

    addProductCart() {
      // const newProduct = JSON.parse(JSON.stringify())
      this.product.quantity = this.quantity
      console.log(this.product.quantity)
      this.addProductToCart(this.product)
    },
  },
}
</script>
<style scoped>
.modal-overlay,
.modal-4-overlay,
.modal-2-overlay,
.modal-3-overlay {
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
