<template>
    <section class="intro" :style="{backgroundImage:`url(${getImage(bgImg)})`}">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AppIntro',
    props:{
        bgImg:{
            type:String,
        },
    },
    methods:{
        getImage(path){
            return require('@/' + path)
        },
    }
}
</script>
