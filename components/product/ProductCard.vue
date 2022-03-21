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
      <img class="product__card-img" :src="item.image" alt="" />
    </div>
    <div class="product__card-title">
      {{ item.title }}
    </div>
    <div class="product__card-price">
      <p class="product__card-odlprice">{{ item.price }} тг</p>
      <p class="product__card-newprice">
        {{ item.new_price ? item.new_price : item.price }}тг.
      </p>
    </div>
    <div class="product__card-bottom">
      <button
        class="page__basket-btn product__card-basket"
        :class="{ active: isAdded }"
        :disabled="isAdded"
        @click="add(item)"
      >
        В корзину
      </button>
      <nuxt-link
        class="product__card-link"
        :to="{ name: 'products-id', params: { id: item.id } }"
        >Подробнее</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import IconBookmark from '~/components/icons/IconBookmark.vue'
import { actionTypes } from '~/store/cart'
import { actionTypes as actionTypesBookmark } from '~/store/bookmarks'

export default {
  name: 'ProductCard',
  components: {
    IconBookmark,
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

    add(item) {
      this.isAdded = true
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
        if (payload.status === 200 && !payload.isDelete) {
          this.isFavorite = true
        } else {
          this.isFavorite = false
        }
      })
    },
  },
}
</script>
