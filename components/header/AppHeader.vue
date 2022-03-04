<template>
    <header class="header">
    <div class="container">
      <div class="header__top">
        <app-logo />
        <app-search />
        <switch-language />
        <app-bookmarks />
        <app-basket />
        <app-profile />
      </div>
      <app-nav />
    </div>
  </header>
</template>


<script>
import AppLogo from "~/components/header/AppLogo.vue";
import AppSearch from "~/components/AppSearch.vue";
import SwitchLanguage from "~/components/header/SwitchLanguage.vue";
import AppBookmarks from "~/components/bookmarks/AppBookmarks.vue";
import AppBasket from "~/components/basket/AppBasket.vue";
import AppProfile from "~/components/header/profile/AppProfile.vue";
import AppNav from "~/components/header/AppNav.vue";

export default {
    name: 'AppHeader',
    components: {
      AppLogo,
      AppSearch,
      SwitchLanguage,
      AppBookmarks,
      AppBasket,
      AppProfile,
      AppNav,
    }
}
</script>
