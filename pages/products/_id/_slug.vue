<template>
  <section class="characteristic">
    <div class="container">
      <div class="characteristic__inner">
        <div class="characteristic__product">
          <div class="characteristic__product-images">
            <div
              v-if="HooperIsActive"
              class="characteristic__product-images-inner"
            >
              <hooper class="characteristic__product-images-hooper">
                <slide
                  v-for="(item, index) in product.image"
                  :key="index"
                  class="image-wrapper"
                >
                  <img
                    class="characteristic__product-img"
                    :src="item"
                    :alt="product.title"
                  />
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
              </hooper>
            </div>
            <div v-if="HooperIsNotActive">
              <img
                class="characteristic__product-img"
                :src="product.image"
                :alt="product.title"
              />
            </div>
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
          <div v-if="HooperIsActive && product.video" class="clip">
            <iframe
              width="460"
              height="280"
              :src="loadProductVideo(product.video)"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="characteristic__content">
          <p class="characteristic__code">Код Товара: {{ product.code }}</p>
          <p class="characteristic__remainder">
            В наличии: {{ product.remainder }} шт.
          </p>
          <h3 class="characteristic__title">
            {{ product.title }}
          </h3>
          <p class="characteristic__price">
            {{ numberWithSpaces(product.price) }} тг
          </p>

          <!-- Quantity block -->
          <div
            v-if="getProductQuantityById(product.id)"
            class="characteristic__number"
          >
            <p>Кол-во:</p>
            <div class="order__products-number characteristic__number-num">
              <button
                class="order__products-minus"
                @click.prevent="updatedQuantity({ type: 'decrease', product })"
              >
                <img src="@/assets/images/icons/minus-icon.svg" alt="-" />
              </button>
              <p>{{ getProductQuantityById(product.id) }}</p>
              <button
                class="order__products-plus"
                @click.prevent="updatedQuantity({ type: 'increase', product })"
              >
                <img src="@/assets/images/icons/plus-icon.svg" alt="+" />
              </button>
            </div>
          </div>

          <!-- Buy buttons -->
          <div v-else class="characteristic__buttons">
            <template>
              <div v-if="getProductIsAvailable">
                <button class="characteristic__buy" @click="addProductCart">
                  Купить
                </button>
              </div>

              <div v-else>
                <button class="characteristic__buy" @click="NotifyModal = true">
                  Уведомить о поступлении
                </button>
                <div v-if="NotifyModal" class="modal">
                  <div class="modal__container">
                    <div class="modal__login">
                      <h6 class="modal__login-title">
                        Подписаться на рассылку
                      </h6>
                      <!-- <p
                      v-if="error"
                      style="color: red; font-size: 12px margin-bottom:8px;"
                    >
                      {{ error }}
                    </p> -->
                      <form class="modal__login-form" @submit.prevent="notify">
                        <input
                          id="mail-input"
                          v-model="email"
                          class="modal__login-input modal__login-email"
                          type="email"
                          placeholder="Эл. почта"
                          required
                        />
                        <button class="modal__login-btn" type="submit">
                          Подписаться
                        </button>
                      </form>
                    </div>
                  </div>
                  <button class="modal__close" @click="NotifyModal = false">
                    <img src="@/assets/images/icons/close-modal.svg" alt="" />
                  </button>
                </div>

                <div v-if="NotifyModalEnd" class="modal">
                  <div class="modal__container">
                    <div class="modal__login">
                      <h6 class="modal__login-title">Готово!</h6>
                      <!-- <p
                      v-if="error"
                      style="color: red; font-size: 12px margin-bottom:8px;"
                    >
                      {{ error }}
                    </p> -->
                    </div>
                  </div>
                  <button class="modal__close" @click="NotifyModalEnd = false">
                    <img src="@/assets/images/icons/close-modal.svg" alt="" />
                  </button>
                </div>

                <nuxt-link
                  to="/constructor"
                  class="characteristic__link characteristic__link-constructor"
                >
                  Конструктор
                </nuxt-link>
                <a
                  href="https://obagnew.a-lux.dev/shopping"
                  target="_blank"
                  class="characteristic__link characteristic__link-foto"
                >
                  Запросить фото
                </a>
              </div>
            </template>
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

              <a href="#" class="order-btn" @click="OrderModal = true"
                >Заказать в 1 клик</a
              >
            </div>
            <div class="characteristic__info-content">
              <div v-html="product[productInfo]"></div>
              <p v-if="productInfo === 'reviews.text' && isLoggedIn">
                <a class="account__link" @click.prevent="showReviewModal">
                  Оставить отзыв
                </a>
              </p>
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
                <p>Онлайн оплата</p>
                <p>
                  Как оплатить: после оформления заказа:<br />
                  Вы можете оплатить банковскими картами Visa, MasterCard;
                </p>
                <br />
                <p>Оплата при получении</p>
                <p>
                  Как оплатить: по факту получения товара в пункте
                  самовывоза:<br />
                  банковскими картами карты Visa, MasterCard;
                </p>
                <br />
                <p>
                  Доставка курьерской службой в течении 3-5 рабочих дней по
                  Казахстану. По Алматы яндекс курьером либо самовывоз. Оплата
                  за курьерскую службу при получении.
                </p>
                <br />
                <p>
                  *При оформлении заказа на доставку, оплата за курьерскую
                  службу оплачиваеться при получении.
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
                <p>
                  Поддержка клиентов ежедневно онлайн с 10:00 до 22:00 по номеру
                  +7 701 348 19 47
                </p>
              </div>
            </transition>
          </div>

          <div class="characteristic__accordion">
            <a
              href="https://obagnew.a-lux.dev/shopping"
              target="_blank"
              class="characteristic__accordion-title"
            >
              Запросить фото
            </a>
          </div>
        </div>
      </div>
    </div>
    <modal-one-click-order v-if="OrderModal" @close="OrderModal = false" />
    <app-modal-review
      :productId="this.$route.params.id"
      v-if="isVisibleReviewModal"
      @close="isVisibleReviewModal = false"
    />
    <transition name="fade">
      <app-product-added v-if="isShownAddedTransition" text="Товар добавлен в корзину" />
    </transition>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import MetaSeo from '@/mixins/MetaSeo.vue'
import { actionTypes } from '~/store/cart'
import { loadProductVideo } from '~/helpers/product-helpers'
import productsMetaLoader from '~/helpers/meta-loader'
import { numberWithSpaces } from '~/helpers/utils'
import IconBookmark from '~/components/icons/IconBookmark.vue'
import AppPartsCard from '~/components/cards/AppPartsCard.vue'
import ModalOneClickOrder from '@/components/modal/AppModalOneClickOrder.vue'
import AppProductAdded from '~/components/modal/AppProductAdded.vue'
import AppModalReview from '~/components/modal/AppModalReview.vue'
import 'hooper/dist/hooper.css'

export default {
  name: 'CharacteristicPage',
  head() {
    return this.productsMetaLoader(
      this.product?.seo_title,
      this.product?.seo_description,
      this.product?.seo_content
    )
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    IconBookmark,
    AppPartsCard,
    ModalOneClickOrder,
    AppProductAdded,
    AppModalReview,
  },
  mixins: [MetaSeo],
  data() {
    return {
      HooperIsActive: '',
      HooperIsNotActive: '',
      isExist: false,
      email: '',
      NotifyModal: false,
      NotifyModalEnd: false,
      OrderModal: false,
      showAccordionFirst: false,
      showAccordionSecond: false,
      isShownAddedTransition: false,
      isVisibleReviewModal: false,
      product: {},
      isFavorite: false,
      productInfo: null,
      productPrice: [],
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
  computed: {
    ...mapState('auth', ['isLoggedIn']),
    ...mapGetters('cart', ['getProductQuantityById']),
    getProductIsAvailable() {
      return this.product?.available && this.product?.remainder > 0
    },
  },
  mounted() {
    if (this.$route?.params?.id) {
      this.getProducts(this.$route?.params?.id)
      // this.notify(this.$route?.params?.id)
    }
    this.productInfo = this.productTubs[0].name
  },
  methods: {
    productsMetaLoader,
    loadProductVideo,
    numberWithSpaces,
    ...mapActions('cart', {
      addProductToCart: actionTypes.addProduct,
      updatedQuantity: actionTypes.updatedQuantity,
      removeProduct: actionTypes.removeProduct,
    }),

    selecProductInfo(selectInfo) {
      this.productInfo = selectInfo
    },
    showReviewModal() {
      this.isVisibleReviewModal = true
    },
    toggleShowAccordionFirst() {
      this.showAccordionFirst = !this.showAccordionFirst
    },
    toggleShowAccordionSecond() {
      this.showAccordionSecond = !this.showAccordionSecond
    },
    getProducts(id) {
      this.$api.get(`/product/${id}`).then((res) => {
        this.product = res.data.product
        this.isExist = res.data.product.available === 1

        if (Array.isArray(this.product.image)) {
          this.HooperIsActive = true
        } else {
          this.HooperIsNotActive = true
        }
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
            this.NotifyModalEnd = true
            this.NotifyModal = false
          } else {
            alert('Введите коректный email')
          }

          // this.res = response.message
        })
        .catch((err) => {
          console.log(err)
        })
    },

    addProductCart() {
      this.isShownAddedTransition = true
      setTimeout(() => {
        this.isShownAddedTransition = false
      }, 3000)
      this.addProductToCart(this.product)
    },
  },
}
</script>

<style scoped>
.clip {
  margin: 100px 0;
}

@media (max-width: 1000px) {
  iframe {
    width: 260px;
    height: 120px;
  }
}

@media (max-width: 900px) {
  .characteristic__product,
  .characteristic__content {
    max-width: 100%;
    width: 100%;
  }

  .characteristic__buttons {
    display: flex;
    /* align-items: center; */
    justify-content: left !important;
    flex-wrap: wrap;
  }

  .characteristic__product-images-hooper {
    max-width: 350px !important;
    max-height: 350px !important;
    margin: 0 auto;
  }
}

.characteristic__product-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

li.image-wrapper.hooper-slide {
  text-align: center;
}

#mail-input {
  padding: 12px 52px;
}

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

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
