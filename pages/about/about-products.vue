<template>
    <div>
        <app-header />
        <app-intro-arrow> 
          <h3 class="intro__title intro__title-arrow">
              Информация о продукции O bag
          </h3>
        </app-intro-arrow>
        <div class="about__brand">
          <div class="container">
            <p class="about__brand-text">
              <span>O bag</span> - современный, динамичный и дальновидный итальянский бренд аксессуаров. Компания была основана и построена на успехе одноименных модульных и полностью комбинируемых сумок, изготовленных из инновационного сверхлегкого материала XL Extralight®. Материал превратил изделия в настоящие культовые аксессуары, а также стал преимущественной особенностью бренда. 
            </p>
            <p class="about__brand-text">
              <span>O bag</span> существует на рынке более 10 лет и признан ведущим брендом в создании индивидуального стиля. Сегодня ассортимент продукции варьируется от сумок до часов, солнцезащитных очков, обуви и даже линии Home, в которую входят лампы и контейнеры для хранения продуктов, созданные в сотрудничестве с Guzzini. O bag - это бренд, основанный на дизайне. Сегодня это признанное модное имя. Его любят все поколения, которые ценят возможность создавать и выражать свой собственный стиль.
            </p>
          </div>
        </div>
        <app-news />
        <app-mail />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppIntroArrow from "~/components/intro/AppIntroArrow.vue";
import AppNews from "~/components/news/AppNews.vue";
import AppMail from "~/components/AppMail.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  name: 'MissionPage',
  components: {
    AppHeader,
    AppIntroArrow,
    AppNews,
    AppMail,
    AppFooter,
  },
}
</script>
