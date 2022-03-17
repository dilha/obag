<template>
  <div v-if="item" class="product__card">
    <div class="product__card-image">
      <div class="product__card-top">
        <div class="product__card-sale">Mid Season Sale -30%</div>
        <button class="product__card-bookmark" @click.prevent="bookmarks(item)">
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
import { mapActions } from 'vuex'
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
  },
  data() {
    return {
      isAdded: false,
    }
  },
  methods: {
    ...mapActions('cart', { addProductToCart: actionTypes.addProduct }),
    ...mapActions('bookmarks', { bookmarks: actionTypesBookmark.addBookmarks }),
    add(item) {
      this.isAdded = true
      this.addProductToCart(item).then((isExists) => {
        this.isAdded = isExists
      })
    },
  },
}
</script>
