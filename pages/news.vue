<template>
    <div>
        <app-intro-white-arrow>
            <h3 class="intro__title">
                Promo / News
            </h3>
        </app-intro-white-arrow>
        <section class="news page__block">
            <div class="container">
                <div class="news__top page__block-top">
                    <h3 class="news__title page__title">
                        Новости компании
                    </h3>
                </div>
                <div class="news__inner">
                    <news-cards v-for="item in items" :key="item" :item="item" />
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
import axios from 'axios'
import AppIntroWhiteArrow from "~/components/intro/AppIntroWhiteArrow.vue";
import NewsCards from "~/components/news/NewsCards.vue";
export default {
  name: 'NewsPage',
  components: {
    AppIntroWhiteArrow,
    NewsCards,
  },
  data() {
      return {
          items: [
                // {
                //     title: "Black Friday: черные скидки –30%!",
                //     text: "Черным-черным ноябрем O bag lovers в че..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Secret Black Friday в O bag: будьте первыми!",
                //     text: "ссс! Рассказываем по секрету!Получите д..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "MID SEASON SALE: СКИДКИ ДО -30%!",
                //     text: "Все очень ждали этот момент! И вот – дол..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Покупайте сумку O bag и получите скидку -50% на часы O clock!",
                //     text: "Часы – важное дополнение повседневного о..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Black Friday: черные скидки –30%!",
                //     text: "Черным-черным ноябрем O bag lovers в че..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Secret Black Friday в O bag: будьте первыми!",
                //     text: "ссс! Рассказываем по секрету!Получите д..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "MID SEASON SALE: СКИДКИ ДО -30%!",
                //     text: "Все очень ждали этот момент! И вот – дол..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Покупайте сумку O bag и получите скидку -50% на часы O clock!",
                //     text: "Часы – важное дополнение повседневного о..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Black Friday: черные скидки –30%!",
                //     text: "Черным-черным ноябрем O bag lovers в че..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Secret Black Friday в O bag: будьте первыми!",
                //     text: "ссс! Рассказываем по секрету!Получите д..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "MID SEASON SALE: СКИДКИ ДО -30%!",
                //     text: "Все очень ждали этот момент! И вот – дол..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Покупайте сумку O bag и получите скидку -50% на часы O clock!",
                //     text: "Часы – важное дополнение повседневного о..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Black Friday: черные скидки –30%!",
                //     text: "Черным-черным ноябрем O bag lovers в че..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Secret Black Friday в O bag: будьте первыми!",
                //     text: "ссс! Рассказываем по секрету!Получите д..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "MID SEASON SALE: СКИДКИ ДО -30%!",
                //     text: "Все очень ждали этот момент! И вот – дол..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
                // {
                //     title: "Покупайте сумку O bag и получите скидку -50% на часы O clock!",
                //     text: "Часы – важное дополнение повседневного о..",
                //     image: "https://avatars.mds.yandex.net/get-zen_doc/1594832/pub_5ea653fc77d8ae256581bc57_5ea6540506b3c73001d0236b/scale_1200",
                // },
          ]
      }
  },
  mounted() {
    axios
      .get('https://bag.a-lux.dev/api/page/get-news')
      .then((response) => (this.items = response.data.news))
  },
}
</script>
