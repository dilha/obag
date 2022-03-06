<template>
  <div class="order__price">
    <div class="order__price-content">
      <div class="order__total">
        <p class="order__total-text">
          Итого:
        </p>
        <p class="order__total-number">
          6729.00 грн.
        </p>
      </div>
      <div class="order__friday">
        <p class="order__friday-text">
          Black Friday:
        </p>
        <p class="order__friday-number">
          -1506.80 грн.
        </p>
      </div>
      <div class="order__delivery">
        <p class="order__delivery-text">
          Доставка в отделение Новой Почты:
        </p>
        <p class="order__delivery-number">
          45.00 грн.
        </p>
      </div>
      <div class="order__all">
        <p class="order__all-text">
          Всего:
        </p>
        <p class="order__all-number">
          4766.20 грн.
        </p>
      </div>
    </div>
    <div class="order__buttons">
      <button class="order__buttons-issue">Оформить заказ</button>
      <button class="order__buttons-delete">Удалить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppOrderPrice',
}
</script>