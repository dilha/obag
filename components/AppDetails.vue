<template>
    <section class="details">
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
                <div class="details__item" :style="{backgroundImage:`url(${getImage('assets/images/details/details-1.jpg')})`}">
                    <h6 class="details__item-title">
                        Готовые комбинации
                    </h6>
                </div>
                <div class="details__item" :style="{backgroundImage:`url(${getImage('assets/images/details/details-2.jpg')})`}">
                    <h6 class="details__item-title">
                        Корпуса
                    </h6>
                </div>
                <div class="details__item" :style="{backgroundImage:`url(${getImage('assets/images/details/details-3.jpg')})`}">
                    <h6 class="details__item-title">
                        ручки
                    </h6>
                </div>
                <div class="details__item" :style="{backgroundImage:`url(${getImage('assets/images/details/details-4.jpg')})`}">
                    <h6 class="details__item-title">
                        Подкладки
                    </h6>
                </div>
                <div class="details__item" :style="{backgroundImage:`url(${getImage('assets/images/details/details-5.jpg')})`}">
                    <h6 class="details__item-title">
                        Манжеты
                    </h6>
                </div>
                <div class="details__item" :style="{backgroundImage:`url(${getImage('assets/images/details/details-6.jpg')})`}">
                    <h6 class="details__item-title">
                        Флипы
                    </h6>
                </div>
                <div class="details__item" :style="{backgroundImage:`url(${getImage('assets/images/details/details-7.jpg')})`}">
                    <h6 class="details__item-title">
                        Клипсы
                    </h6>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppDetails",
    methods:{
        getImage(path){
            return require('@/' + path)
        }
    }
}
</script>