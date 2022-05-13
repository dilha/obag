<template>
    <section class="intro intro-red">
        <slot></slot>
        <a class="intro__arrow" href="#?">
            <icon-white-arrow />
        </a>
    </section>
</template>

<script>
import IconWhiteArrow from "~/components/icons/IconWhiteArrow.vue";

export default {
    name: 'AppIntroWhiteArrow',
    components: {
        IconWhiteArrow,
    },
    methods:{
        getImage(path){
            return require('@/' + path)
        },
    }
}
</script>
