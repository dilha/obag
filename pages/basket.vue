<template>
  <div>
    <section class="basket">
      <div class="container">
        <h3 class="basket__title page__title">Корзина</h3>
        <div class="basket__inner">
          <div v-if="products" class="basket__products">
            <app-order-products
              v-for="(item, index) in products"
              :key="index"
              :item="item"
            />
          </div>

          <app-order-price
            @clickCheckoutButton="isVisibleContactModal = true"
          />
        </div>
      </div>
    </section>
    <app-news />
    <modal-contact
      v-if="isVisibleContactModal"
      @close="isVisibleContactModal = false"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalContact from '@/components/modal/AppModalContacts.vue'

import AppOrderProducts from '~/components/order/AppOrderProducts.vue'

import AppOrderPrice from '~/components/order/AppOrderPrice.vue'
import AppNews from '~/components/news/AppNews.vue'
export default {
  name: 'BasketPage',
  components: {
    AppOrderProducts,
    ModalContact,
    AppOrderPrice,
    AppNews,
  },
  data() {
    return {
      isVisibleContactModal: false,
    }
  },
  computed: {
    ...mapGetters('cart', ['products']),
  },
}
</script>
