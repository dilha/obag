<template>
  <div>
  <div class="save">
    <div class="container">
        <h3 class="save__title page__title">
            Save Your O bag
        </h3>
      <div class="save__inner">
          <a class="save__btn" href="#?">
              Информация о возврате
          </a>
          <a class="save__btn" href="#?">
              Информация о возврате
          </a>
          <a class="save__btn" href="#?">
              Информация по сборке
          </a>
      </div>
    </div>
  </div>
    <app-news />
  </div>
</template>

<script>
import AppNews from '~/components/news/AppNews.vue';

export default {
  name: 'SavePage',
  components: {
    AppNews,
  },
}
</script>


<style lang="scss">
    .save {
        padding: 120px 0;
        &__title {
            font-size: 96px;
            text-align: center;
        }
        &__inner {
            display: flex;
            justify-content: space-between;
            margin-top: 72px;
        }

        &__btn {
            display: inline-block;
            border: 2px solid #3D3935;
            border-radius: 100px;
            padding: 22px 63px;
            font-size: 14px;
            line-height: 21px;
            text-align: center;
            color: #3D3935;
        }
    }

    @media(max-width: 1000px) {
        .save {
            &__title {
              font-size: 70px;
            }   

            &__inner {
                margin-top: 50px;
            }

            &__btn {
                padding: 15px 30px;
            }
        }
    }

    @media(max-width: 800px) {
        .save {
            &__title {
              font-size: 50px;
            }   

            &__inner {
                margin-top: 50px;
                justify-content: center;
                flex-wrap: wrap;
            }

            &__btn {
                padding: 15px 30px;
                margin: 0 10px 20px;
            }
        }
    }
</style>

