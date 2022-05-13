<template>
  <div v-if="item" class="certificates__item">
    <img class="certificates__item-img" :src="item.image" alt="" />
    <h6 class="certificates__item-title">
      {{ item.title }}
    </h6>
    <p class="certificates__item-price">{{ item.price }} грн.</p>
    <div class="certificates__item-bottom">
      <!-- <button class="page__basket-btn certificates__item-basket">
                В корзину
            </button> -->
      <button
        class="page__basket-btn certificates__item-basket"
        :class="{ active: isAdded }"
        :disabled="isAdded"
        @click="add(item)"
      >
        В корзину
      </button>
      <!-- <a class="certificates__item-link" href="#?"> Подробнее </a> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '~/store/cart'
export default {
  name: 'ProductCard',
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      isAdded: false,
    }
  },
  methods: {
    ...mapActions('cart', { addProductToCart: actionTypes.addProduct }),
    add(item) {
      this.isAdded = true
      this.addProductToCart(item).then((isExists) => {
        this.isAdded = isExists
      })
    },
  },
}
</script>
