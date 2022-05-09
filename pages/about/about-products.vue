<template>
  <div>
    <app-intro-arrow>
      <h3 class="intro__title intro__title-arrow">
        Информация о продукции O bag
      </h3>
    </app-intro-arrow>
    <div class="about__products">
      <div class="container">
        <h3 class="about__products-title page__title">Сумки</h3>
        <div class="about__content">
          <h4 class="about__content-title page__title">O bag и O bag mini</h4>
          <div class="about__inner">
            <div class="about__item">
              <p class="about__item-text">
                <span>O bag и O bag mini</span> - это знаковые сумки бренда,
                появившиеся на свет в 2012 году. Благодаря своей уникальной
                форме и простому дизайну, сумка O bag стала символом бренда,
                названного в ее честь. Использование XL Extralight® позволяет
                сочетать функциональность, надежность и легкость. O bag стала
                «пионером» в кастомизации. Это необходимая вещь для любой
                женщины, которая любит создавать и персонализировать собственный
                стиль.Обе сумки можно изменять благодаря сменным компонентам,
                таким как: ручки, подкладки, внутренние карманы, манжеты и
                накладки. Комплект легко собирать - он преображается за
                несколько минут. Корпус XL Extralight® - полужесткий,
                вместительный и удобный, его можно комбинировать с различными
                аксессуарами, что делает эту модель универсальным вариантом для
                любого случая: похода по магазинам, работы или отдыха. Корпуса O
                bag classic и O bag mini также бывают с различными текстурами,
                которые получаются с помощью специальной обработки.
              </p>
              <button class="about__item-btn page__border-btn">O bag</button>
              <button class="about__item-btn page__border-btn">
                O bag mini
              </button>
            </div>
            <img
              class="about__item-img"
              src="@/assets/images/about/about-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="about__content">
          <h4 class="about__content-title page__title">О bag urban</h4>
          <div class="about__inner">
            <div class="about__item">
              <p class="about__item-text">
                <span>O bag urban</span> - это большая, удобная и вместительная
                сумка для жизни в современном городе. Она идеально подходит для
                динамичных, активных и ярких женщин. O bag urban - эргономичная
                модель с сафьяновой текстурой. Ее можно носить как в руках так и
                на плече: с золотыми или серебряными цепочками и элементами,
                которые выполнены из экокожи. Также эта модель доступна в версии
                matelassé, созданной по специальной технологии, это придает
                сумке необычайно утонченный стеганый эффект.
              </p>
              <button class="about__item-btn page__border-btn">
                O bag urban
              </button>
            </div>
            <img
              class="about__item-img"
              src="@/assets/images/about/about-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'AboutProductPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
  mixins: [MetaSeo],
}
</script>
