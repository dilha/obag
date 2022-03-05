<template>
    <section class="catalog">
        <div class="container">
           <div class="catalog__top">
              <h3 class="catalog__title page__title">
Каталог
              </h3>
              <div class="catalog__sorting">
                <p>Сортировка:</p>
                <sorting-select />
              </div>
           </div>
           <div class="catalog__sidebar">
                 
          </div>
        </div>
        <app-news />
    </section>
</template>

<script>
import SortingSelect from "~/components/catalog/SortingSelect.vue";
import AppNews from "~/components/news/AppNews.vue";

export default {
  name: 'MissionPage',
  components: {
    SortingSelect,
    AppNews,
  },
}
</script>
