<template>
    <section class="intro">
        <slot></slot>
        <a class="intro__arrow" href="#?">
            <icon-arrow />
        </a>
    </section>
</template>

<script>
import IconArrow from "~/components/icons/IconArrow.vue";

export default {
    name: 'AppIntro',
    components: {
        IconArrow,
    },
    methods:{
        getImage(path){
            return require('@/' + path)
        },
    }
}
</script>
