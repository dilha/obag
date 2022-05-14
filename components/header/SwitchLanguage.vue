
<template>
    <div class="language" @click="select"> 
          <div class="language__header">
              <span class="language__current">
               {{currentLang.label}}
              </span>
              <img class="language__arrow" src="@/assets/images/icons/select-icon.svg" alt="">
          </div>
          <div class="language__body">
              <div v-for="lang in langs" :key="lang.value" class="language__item" @click="replacement(lang)">
                {{ lang.label }}
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "SwitchLanguage",
    data() {
      return {
        currentLang:'',
        langs: [
          {
            label:'рус',
            value:'ru'
          },
          {
            label:'анг',
            value:'en'
          },
          {
            label:'каз',
            value:'kz'
          },
        ]
      }
    },
    mounted() {
      this.currentLang = this.langs[0];
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
        replacement(lang) {
        this.currentLang = lang;
        },
    }, 
    }
</script>