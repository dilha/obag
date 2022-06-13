<template>
  <div v-if="item" class="product__card">
    <div class="product__card-image">
      <div class="product__card-top">
        <!-- <div class="product__card-sale">Mid Season Sale -30%</div> -->
        <button
          class="product__card-bookmark"
          :class="{ active: item.isFavorite || isFavorite }"
          @click.prevent="addProductToBookmark(item)"
        >
          <icon-bookmark />
        </button>
      </div>
      <img
        v-if="checkProductImage(item.image)"
        class="product__card-img"
        :src="item.image"
        alt=""
      />
      <img
        v-else
        class="product__card-img"
        src="~/assets/images/products/product-placeholder-img.png"
        alt=""
      />
    </div>
    <nuxt-link
      :to="{
        name: 'products-id-slug',
        params: { id: item.id, slug: item.slug },
      }"
      class="product__card-title"
    >
      {{ item.title }}
    </nuxt-link>
    <div class="product__card-price">
      <p
        v-if="item.new_price && item.new_price !== item.price"
        class="product__card-oldprice"
      >
        {{ numberWithSpaces(item.price) }} тг
      </p>
      <p class="product__card-newprice">
        {{
          item.new_price
            ? numberWithSpaces(item.new_price)
            : numberWithSpaces(item.price)
        }}
        тг.
      </p>
    </div>
    <div class="product__card-bottom">
      <button v-if="item.remainder > 0"
        class="page__basket-btn product__card-basket"
        :class="{ active: isAdded }"
        :disabled="isAdded"
        @click="add(item)"
      >
        В корзину
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="shopping-cart"
          class="cart"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="box"
          class="box"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"
          ></path>
        </svg>
      </button>
      <nuxt-link
        class="product__card-link"
        :to="{
          name: 'products-id-slug',
          params: { id: item.id, slug: item.slug },
        }"
        >Подробнее</nuxt-link
      >
    </div>
    <transition name="fade">
      <app-product-added v-if="productAdded" text="Товар добавлен в корзину" />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import IconBookmark from '~/components/icons/IconBookmark.vue'
import { actionTypes } from '~/store/cart'
import { actionTypes as actionTypesBookmark } from '~/store/bookmarks'
import AppProductAdded from '~/components/modal/AppProductAdded.vue'
import { loadProductImage, checkProductImage } from '~/helpers/product-helpers'
import { numberWithSpaces } from '~/helpers/utils'

export default {
  name: 'ProductCard',
  components: {
    IconBookmark,
    AppProductAdded,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      isAdded: false,
      isFavorite: false,
      productAdded: false,
    }
  },
  computed: {
    ...mapState('cart', ['cartProducts']),
  },
  mounted() {
    this.isAddedCard()
  },
  methods: {
    ...mapActions('cart', { addProductToCart: actionTypes.addProduct }),
    ...mapActions('bookmarks', {
      addBookmark: actionTypesBookmark.addBookmark,
    }),
    loadProductImage,
    checkProductImage,
    numberWithSpaces,

    add(item) {
      this.isAdded = true
      this.productAdded = true
      setTimeout(() => {
        this.productAdded = false
      }, 3000)
      this.addProductToCart(item).then((isExists) => {
        // this.isAdded = isExists
      })
    },

    isAddedCard() {
      this.cartProducts.forEach((element) => {
        if (element.id === this.item.id) {
          this.isAdded = true
        }
      })
    },

    addProductToBookmark(item) {
      this.addBookmark(item).then((payload) => {
        if (payload?.status === 200 && !payload.isDelete) {
          this.isFavorite = true
        } else {
          this.isFavorite = false
        }
      })
    },
  },
}
</script>
