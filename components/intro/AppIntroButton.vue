<template>
    <section class="intro" :style="{backgroundImage:`url(${image})`}">
        <slot></slot>
        <nuxt-link class="intro__btn" to="/catalog">
            Смотреть
        </nuxt-link>
    </section>
</template>

<script>
export default {
    name: 'AppIntro',
    props:{
        image:{
            type:String,
        },
    },
}
</script>
