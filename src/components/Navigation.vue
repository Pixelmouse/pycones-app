<template>
  <nav
    v-if="!$store.state.hideNav"
    class="nav"
  >
    <ul class="nav__list">
      <li
        class="nav__list--item"
        :class="{ 'nav__active' : $store.state.activeMenu === 'main' }"
      >
        <router-link :to="{ name: 'Home' }">
          _main
        </router-link>
      </li>
      <li
        class="nav__list--fav"
        :class="{ 'nav__active' : $store.state.activeMenu === 'favs' }"
      >
        <router-link :to="{ name: 'Favs' }">
          <span>, ,</span>
          <span>,,,,</span>
          <span>,,,</span>
          <span>,,</span>
          <span>,</span>
        </router-link>
      </li>
      <li
        class="nav__list--item"
        :class="{ 'nav__active' : $store.state.activeMenu === 'map' }"
      >
        <router-link :to="{ name: 'Map' }">
          _mapa
        </router-link>
      </li>
      <li
        class="nav__list--item"
        :class="{ 'nav__active' : $store.state.activeMenu === 'info' }"
      >
        <router-link :to="{ name: '/' }">
          _info
        </router-link>
      </li>
      <li
        class="nav__list--config"
        :class="{ 'nav__active' : $store.state.activeMenu === 'config' }"
      >
        <router-link :to="{ name: 'Config' }">
          _config
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
