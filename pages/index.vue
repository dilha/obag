<template>
<div>
  <header-block />
  <intro-block />
  <season-block />
  <like-will />
  <mid-flash />
  <obag-insta />
  <company-news />
  <mailing-block />
  <footer-block />
</div>
</template>

<script>
import HeaderBlock from "~/components/HeaderBlock.vue";
import IntroBlock from "~/components/IntroBlock.vue";
import SeasonBlock from "~/components/main/SeasonBlock.vue";
import LikeWill from "~/components/LikeWill.vue";
import MidFlash from "~/components/main/MidFlash.vue";
import ObagInsta from "~/components/main/ObagInsta.vue";
import CompanyNews from "~/components/CompanyNews.vue";
import MailingBlock from "~/components/MailingBlock.vue";
import FooterBlock from "~/components/FooterBlock.vue";

export default {
  name: 'IndexPage',
  components: {
    HeaderBlock,
    IntroBlock,
    SeasonBlock,
    LikeWill,
    MidFlash,
    ObagInsta,
    CompanyNews,
    MailingBlock,
    FooterBlock,

  },
  data() {
    return {
      cards:[
        {
          name:'kkk',
          img:'ttttt'
        }
      ]
    }
  },
  methods: {
    select() {
      const dropdown = document.querySelector('.language__body');
      const arrow = document.querySelector('.language__header > img')
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
          dropdown.style.display = 'block'
          arrow.style.transform = 'rotate(180deg)'
      } else if (dropdown.style.display === 'block') {
          dropdown.style.display = 'none'
          arrow.style.transform = 'rotate(0deg)'
      }
    },
    replacement() {
      console.log(this.innerHTML);
    },
  }
}
</script>
