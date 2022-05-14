<template>
  <div class="history__card">
  <div v-for="item in items" :key="item.id" class="history__card-inner">
    <div class="history__card-image">
      <img :src="item.img" alt="" />
      <div class="history__card-title">{{item.elements[0].title}}</div>
    </div>
    <div class="history__card-number history__card-item">
      <p class="history__card-header">Номер заказа</p>
      <p class="history__card-info">{{item.id}}</p>
    </div>
    <div class="history__card-quantity history__card-item">
      <p class="history__card-header">Количество</p>
      <p class="history__card-info">{{item.elements[0].quantity}}</p>
    </div>
    <div class="history__card-price history__card-item">
      <p class="history__card-header">Сумма</p>
      <p class="history__card-info">{{item.price}}</p>
    </div>
    <div class="history__card-status history__card-item">
      <p class="history__card-header">Статус заказа</p>
      <p class="history__card-info">{{item.payment_status}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "AppHistoryCards",
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
    }
  }
}
</script>