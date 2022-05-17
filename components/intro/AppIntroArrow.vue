<template>
    <section class="intro">
        <slot></slot>
        <a class="intro__arrow" :href="`#${link}`">
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
    props: {
        link: {
            type: String,
            default: '?'
        }
    },
    methods: {
        getImage(path) {
            return require('@/' + path)
        },
    }
}
</script>
