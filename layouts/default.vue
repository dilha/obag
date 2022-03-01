<template>
  <div>
    <app-header />
    <Nuxt />
    <app-mail />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "~/components/header/AppHeader.vue";
import AppMail from "~/components/footer/AppMail.vue";
import AppFooter from "~/components/footer/AppFooter.vue";


export default {
    components: {
        AppHeader,
        AppMail,
        AppFooter,
    }
}
</script>