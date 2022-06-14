<template>
  <div>
    <div class="save">
      <div class="container">
        <h3
          class="save__title page__title"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          Save Your O bag
        </h3>
        <div class="save__inner">
          <a
            :key="link.link"
            v-for="link in links"
            class="save__btn"
            :href="link.link"
            target="_blank"
            data-aos="fade-up"
            data-aos-duration="700"
            >{{ link.title }}
          </a>
        </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import MetaSeo from '@/mixins/MetaSeo.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'SavePage',
  components: {
    AppNews,
  },
  mixins: [MetaSeo],
  data() {
    return {
      links: [],
    }
  },
  async mounted() {
    const response = await this.$axios.get('/save-your-obag')
    this.links = response.data
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 15px;
    justify-content: space-between;
    margin-top: 72px;
  }

  &__btn {
    display: inline-block;
    border: 2px solid #3d3935;
    border-radius: 100px;
    padding: 22px 63px;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #3d3935;
  }
}

@media (max-width: 1000px) {
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

@media (max-width: 800px) {
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
