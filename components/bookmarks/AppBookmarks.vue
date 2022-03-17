<template>
  <nuxt-link to="/bookmarks" class="header__bookmarks header__link">
    <span class="header__number header__bookmarks--number">
      {{
        $store.getters['bookmarks/totalBookmarkCount']
          ? $store.getters['bookmarks/totalBookmarkCount']
          : 0
      }}
    </span>
    Закладки
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppBookmarks',
}
</script>