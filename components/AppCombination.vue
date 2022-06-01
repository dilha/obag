<template>
    <section class="combination page__block">
        <div class="container">
            <div class="combination__inner">
                <div class="combination__content">
                    <h3 class="combination__title page__title">
                        {{ title }}
                    </h3>
                    <nuxt-link :to="link" class="combination__btn page__border-btn">
                        Перейти
                    </nuxt-link>
                </div>
                <img class="combination__img" :src="getImage" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppCombination",
    props: {
        title: {
            type: String,
            required: true,
            default: '',
        },
        link: {
            type: String,
            required: true,
            default: '',
        },
        imageUrl: {
            type: String,
            required: true,
            default: '',
        }
    },
    computed: {
        getImage() {
            return `${require(`@/${this.imageUrl}`)}`
        }
    }
}
</script>