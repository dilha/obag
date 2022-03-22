<template>
  <div class="order__products-item">
    <img
      v-if="item.image"
      class="order__products-img"
      :src="item.image"
      :alt="item.title"
    />
    <div class="order__products-content">
      <h6 class="order__products-title">{{ item.title }}</h6>
      <div class="order__products-number">
        <button
          class="order__products-minus"
          @click.prevent="updatedQuantity({ type: 'decrease', product: item })"
        >
          <img src="@/assets/images/icons/minus-icon.svg" :alt="item.title" />
        </button>
        <p>{{ item.quantity }}</p>
        <button
          class="order__products-plus"
          @click.prevent="updatedQuantity({ type: 'increase', product: item })"
        >
          <img
            src="@/assets/images/icons/plus-icon.svg"
            alt="add product shop cart"
          />
        </button>
      </div>
      <div class="order__products-price">
        <p class="order__products-oldprice">{{ item.price }}тг</p>
        <p class="order__products-newprice">
          {{ item.new_price ? item.new_price : item.price }}тг.
        </p>
      </div>
    </div>
    <button class="order__products-btn" @click.prevent="removeProduct(item.id)">
      <img
        src="@/assets/images/icons/delete-icon.svg"
        alt="remove product shop cart"
      />
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '@/store/cart'

export default {
  name: 'AppOrderProducts',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    }
  },
  methods: {
    ...mapActions('cart', {
      updatedQuantity: actionTypes.updatedQuantity,
      removeProduct: actionTypes.removeProduct,
    }),
  },
}
</script>
