<template>
  <div class="product__added">
    <img class="product__added-img" src="@/assets/images/icons/done-icon.svg" alt="">
    <p class="product__added-text">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppProductAdded', 
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>