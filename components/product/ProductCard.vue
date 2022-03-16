<template>
  <div v-if="item" class="product__card">
    <div class="product__card-image">
      <div class="product__card-top">
        <div class="product__card-sale">Mid Season Sale -30%</div>
        <button class="product__card-bookmark">
          <icon-bookmark />
        </button>
      </div>
      <img class="product__card-img" :src="item.image" alt="" />
    </div>
    <div class="product__card-title">
      {{ item.title }}
    </div>
    <div class="product__card-price">
      <p class="product__card-odlprice">
        {{ item.price }}
      </p>
      <p class="product__card-newprice">
        {{ item.new_price ? item.new_price : item.price }}тг.
      </p>
    </div>
    <div class="product__card-bottom">
      <button
        class="page__basket-btn product__card-basket"
        @click.prevent="add(item)"
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
export default {
  name: 'ProductCard',
  components: {
    IconBookmark,
  },
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  methods: {
    ...mapActions('cart', { add: actionTypes.addProduct }),
  },
}
</script>
