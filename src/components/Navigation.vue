<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list--item nav__active">
        <router-link :to="{ name: '/' }">
          _main
        </router-link>
      </li>
      <li class="nav__list--fav">
        <router-link :to="{ name: '/' }">
          <span>, ,</span>
          <span>,,,,</span>
          <span>,,,</span>
          <span>,,</span>
          <span>,</span>
        </router-link>
      </li>
      <li class="nav__list--item">
        <router-link :to="{ name: '/' }">
          _mapa
        </router-link>
      </li>
      <li class="nav__list--item">
        <router-link :to="{ name: '/' }">
          _info
        </router-link>
      </li>
      <li class="nav__list--config">
        <router-link :to="{ name: '/' }">
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
