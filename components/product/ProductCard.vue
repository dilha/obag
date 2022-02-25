<template>
    <div class="product__card">
            <div class="product__card-image">
              <div class="product__card-top">
                <div class="product__card-sale">
                  Mid Season Sale -30% 
                </div>
                <button class="product__card-bookmark">
                  <icon-bookmark />
                </button>
              </div>
              <img class="product__card-img" src="@/assets/images/products/products-1.jpg" alt="">
            </div>
            <div class="product__card-title">
              Женская сумка O bag Unique Бисквит
            </div>
            <div class="product__card-price">
              <p class="product__card-odlprice">
                1990.00 грн.
              </p>
              <p class="product__card-newprice">
                1393.00 грн. 
              </p>
            </div>
            <div class="product__card-bottom">
              <button class="page__basket-btn product__card-basket">
                    В корзину
              </button>
              <a class="product__card-link" href="#?">
                Подробнее
              </a>
            </div>
          </div>
</template>

<script>
import IconBookmark from "~/components/icons/IconBookmark.vue";
export default {
    name: 'ProductCard',
    components: {
    IconBookmark,
    },
}
</script>
