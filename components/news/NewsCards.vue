<template>
    <div v-if="item" class="news__item">
        <img class="news__item-img" :src="item.image" alt="">
        <div class="news__item-title">
        {{item.title}}
        </div>
        <p class="news__item-text">
        {{item.text}}
        </p>
        <a class="news__item-link" href="#?">
        Подробнее
        </a>
    </div>
</template>

<script>
export default {
    name: "NewsCards",
    props: {
        item: {
            type: Object,
            require: true,
        },
    },
}
</script>