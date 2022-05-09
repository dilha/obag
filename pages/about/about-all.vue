<template>
  <div>
    <app-intro bgImg="assets/images/intro/about-intro.jpg">
      <h3 class="intro__title">Все о продукции O bag</h3>
    </app-intro>
    <div class="about__all">
      <div class="container">
        <p class="about__all-text">
          Вся продукция O bag - это результат плодотворного сотрудничества
          основателя O bag Микеле Занелла, творческой команды и Миланской студии
          архитектуры и дизайна laboratorio.quattro. Большая часть продукции
          доверена опыту хорошо зарекомендовавших себя итальянских специалистов
          - партнеров и поставщиков, что обеспечивает отличные стандарты
          качества, соответствующие традициям Made in Italy.
        </p>
        <p class="about__all-text">
          Четыре элемента сделали бренд O bag уникальным, и со временем они
          стали основой компании:
        </p>
        <ul class="about__all-list">
          <li class="about__all-item">кастомизация</li>
          <li class="about__all-item">инновационные материалы</li>
          <li class="about__all-item">дизайн</li>
          <li class="about__all-item">доступные цены</li>
        </ul>
        <p class="about__all-text">Каждый год наши коллекции делятся на:</p>
        <ul class="about__all-list">
          <li class="about__all-item">весна</li>
          <li class="about__all-item">лето</li>
          <li class="about__all-item">осень</li>
          <li class="about__all-item">зима</li>
        </ul>
        <p class="about__all-text">
          Кроме того, капсульные и лимитированные коллекции выпускаются в
          течение года. Как правило, они приурочены к особому событию: к
          примеру, 90-летие Микки Мауса в 2018 году. O bag решила отметить эту
          дату и совместно с Disney создала в его честь коллекцию.
        </p>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppIntro from '~/components/intro/AppIntro.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'MissionPage',
  components: {
    AppIntro,
    AppNews,
  },
  mixins: [MetaSeo],
}
</script>
