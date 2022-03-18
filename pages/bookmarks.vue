<template>
    <section class="bookmarks">
        <div class="container">
            <h3 class="bookmarks__title page__title">
                Мои закладки
            </h3>
            <div v-if="bookmarks.length" class="will__like-inner">
                <product-card v-for="(item, index) in bookmarks" :key="index" :item="item"/>
            </div>
            <div v-else style="text-align: center; margin-top: 20px">
                <h2>Нет закладок</h2>
            </div>
        </div>
    </section>
</template>



<script>
import { mapGetters } from 'vuex'
import ProductCard from "~/components/product/ProductCard.vue";

export default {
    name: "BookmarksPage",
    components: {
        ProductCard,
    },
    data() {
      return {
      }
    },
    computed: {
    ...mapGetters('bookmarks', ['bookmarks']),
    },
}
</script>

<style lang="scss">
.bookmarks {
    margin: 60px 0 120px;
}
</style>