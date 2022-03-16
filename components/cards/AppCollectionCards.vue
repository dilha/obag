<template>
    <section v-if="items" class="collection page__block">
        <div class="container">
            <div class="card__inner">
                <div v-for="item in items" :key="item.id" class="card__item" :style="{backgroundImage:`url(${item.image})`}">
                    <a class="card__item-title" href="">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppCollectionCards",
    props: {
        items: {
            type: Array,
            require: true,
        },
    },
    data() {
      return {
        // collections: [
        //   {
        //     title:'Snake Rock',
        //     bgImg:'assets/images/collection/collection-1.jpg',
        //   },
        //   {
        //     title:'Новые поступления',
        //     bgImg:'assets/images/collection/collection-2.jpg',
        //   },
        //   {
        //     title:'NUMB',
        //     bgImg:'assets/images/collection/collection-3.jpg',
        //   },
        //   {
        //     title:'Fur fun',
        //     bgImg:'assets/images/collection/collection-4.jpg',
        //   },
        //   {
        //     title:'A la Plage',
        //     bgImg:'assets/images/collection/collection-5.jpg',
        //   },
        //   {
        //     title:'Garden Party',
        //     bgImg:'assets/images/collection/collection-6.jpg',
        //   },
        //   {
        //     title:'Denim Collection',
        //     bgImg:'assets/images/collection/collection-7.jpg',
        //   },
        //   {
        //     title:'Natural Desire',
        //     bgImg:'assets/images/collection/collection-8.jpg',
        //   },
        //   {
        //     title:'Soft Collection',
        //     bgImg:'assets/images/collection/collection-9.jpg',
        //   },
        //   {
        //     title:'Swarovski crystals',
        //     bgImg:'assets/images/collection/collection-10.jpg',
        //   },
        //   {
        //     title:'Disney collection',
        //     bgImg:'assets/images/collection/collection-11.jpg',
        //   },
        // ]
      }
    },
}
</script>