<template>
    <section class="details page__block">
        <div class="container">
            <div class="details__inner">
                <div class="details__design">
                    <p class="details__design-text">
                        Комбинируй детали сумки и создай свой дизайн!
                    </p>
                    <button class="details__design-btn">
                        Создать дизайн
                    </button>
                </div>
                <div class="details__item" v-for="detail in details" :key="detail" :style="{backgroundImage:`url(${getImage(detail.bgImg)})`}">
                    <h6 class="details__item-title">
                        {{ detail.title }}
                    </h6>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppDetailsCards",
    data() {
        return {
            details: [
                {
                    title: 'Готовые комбинации',
                    bgImg: 'assets/images/details/details-1.jpg'
                },
                {
                    title: 'Корпуса',
                    bgImg: 'assets/images/details/details-2.jpg'
                },
                {
                    title: 'ручки',
                    bgImg: 'assets/images/details/details-3.jpg'
                },
                {
                    title: 'Подкладки',
                    bgImg: 'assets/images/details/details-4.jpg'
                },
                {
                    title: 'Манжеты',
                    bgImg: 'assets/images/details/details-5.jpg'
                },
                {
                    title: 'Флипы',
                    bgImg: 'assets/images/details/details-6.jpg'
                },
                {
                    title: 'Клипсы',
                    bgImg: 'assets/images/details/details-7.jpg'
                }
            ]
        }
    },
    methods:{
        getImage(path){
            return require('@/' + path)
        }
    }
}
</script>