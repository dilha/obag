<template>
  <div>
    <app-intro-button bg-img="assets/images/intro/main-intro.jpg" />
    <button @click="show">hello world</button>
    <app-season />
    <app-like />
    <app-mid-flash />
    <app-insta />
    <app-news />
    <!-- <app-modal-products v-if="modalShow" @close="close" /> -->
    <!-- <app-modal-contacts v-if="modalShow" @close="close" /> -->
    <!-- <app-modalog-in /> -->
    <app-modal-registration v-if="modalShow" @close="close" />
  </div>
</template>

<script>
import AppIntroButton from '~/components/intro/AppIntroButton.vue'
import AppSeason from '~/components/main/AppSeason.vue'
import AppLike from '~/components/AppLike.vue'
import AppMidFlash from '~/components/main/AppMidFlash.vue'
import AppInsta from '~/components/main/AppInsta.vue'
import AppNews from '~/components/news/AppNews.vue'
// import AppModalProducts from '~/components/modal/AppModalProducts.vue'
// import AppModalContacts from "~/components/modal/AppModalContacts.vue"
// import AppModalogIn from "~/components/modal/AppModalogIn.vue";
import AppModalRegistration from "~/components/modal/AppModalRegistration.vue"
export default {
  name: 'IndexPage',
  components: {
    AppIntroButton,
    AppSeason,
    AppLike,
    AppMidFlash,
    AppInsta,
    AppNews,
    // AppModalProducts,
    // AppModalContacts,
    // AppModalogIn,
    AppModalRegistration,
  },
  data() {
    return {
      modalShow: false,
    }
  },
  methods: {
    show() {
      this.modalShow = true;
    },
    close() {
      this.modalShow = false;
    }
  }
    

}
</script>
