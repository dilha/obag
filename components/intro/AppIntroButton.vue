<template>
    <section class="intro" :style="{backgroundImage:`url(${image})`}">
        <slot></slot>
        <button class="intro__btn">
            Смотреть
        </button>
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
