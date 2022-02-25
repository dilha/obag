<template>
    <section class="season page__block">
    <div class="container">
      <div class="season__inner">
        <div class="season__intro">
            <button class="intro__btn">
              Смотреть
            </button>
        </div>
        <div class="season__slider">
            <product-card />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'AppSeason',
}
</script>