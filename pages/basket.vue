<template>
  <div>
    <section class="basket">
      <div class="container">
        <h3
          class="basket__title page__title"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          Корзина
        </h3>
        <div class="basket__inner">
          <div v-if="products" class="basket__products">
            <app-order-products
              v-for="(item, index) in products"
              :key="index"
              :item="item"
            />
          </div>
          <app-order-price @clickCheckoutButton="checkRequired" />
        </div>
      </div>
    </section>
    <app-news />
    <modal-contact
      v-if="isVisibleContactModal"
      @close="isVisibleContactModal = false"
    />
    <transition name="fade">
      <app-product-added
        v-if="isRequired"
        text="Выберите метод доставки и метод оплаты"
      />
      <app-product-added
        v-if="isProductsEmpty"
        text="Корзина пуста! Bыберите товары для оформление заказа"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import MetaSeo from '@/mixins/MetaSeo.vue'
import ModalContact from '@/components/modal/AppModalContacts.vue'
import AppOrderProducts from '~/components/order/AppOrderProducts.vue'
import AppOrderPrice from '~/components/order/AppOrderPrice.vue'
import AppNews from '~/components/news/AppNews.vue'
import AppProductAdded from '~/components/modal/AppProductAdded.vue'

export default {
  name: 'BasketPage',
  components: {
    AppOrderProducts,
    ModalContact,
    AppOrderPrice,
    AppNews,
    AppProductAdded,
  },
  mixins: [MetaSeo],
  data() {
    return {
      isVisibleContactModal: false,
      isRequired: false,
      isProductsEmpty: false,
    }
  },
  computed: {
    ...mapGetters('cart', ['products']),
    ...mapState('cart', ['deliveryMethod', 'paymentMethod']),
  },
  methods: {
    checkRequired() {
      if (this.deliveryMethod === null || this.paymentMethod === null) {
        this.isRequired = true
        setTimeout(() => {
          this.isRequired = false
        }, 3000)
      } else if (this.products.length <= 0) {
        this.isProductsEmpty = true
        setTimeout(() => {
          this.isProductsEmpty = false
        }, 3000)
      } else {
        this.isVisibleContactModal = true
      }
    },
  },
}
</script>
