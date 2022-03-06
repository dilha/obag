<template>
  <div class="order__products-item">
    <img
      class="order__products-img"
      src="@/assets/images/products/products-1.jpg"
      alt=""
    />
    <div class="order__products-content">
      <h6 class="order__products-title">Женская сумка O bag Unique Сангрия</h6>
      <div class="order__products-number">
        <button class="order__products-minus">
          <img src="@/assets/images/icons/minus-icon.svg" alt="" />
        </button>
        <p>1</p>
        <button class="order__products-plus">
          <img src="@/assets/images/icons/plus-icon.svg" alt="" />
        </button>
      </div>
      <div class="order__products-price">
        <p class="order__products-oldprice">1990.00 грн.</p>
        <p class="order__products-newprice">1393.00 грн.</p>
      </div>
    </div>
    <button class="order__products-btn">
      <img src="@/assets/images/icons/delete-icon.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppOrderProducts',
}
</script>