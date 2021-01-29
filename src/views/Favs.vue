<template>
  <main class="favs">
    <header class="favs__header">
      <p>my_favourites</p>
    </header>
    <nav class="date-nav">
      <button>
        <span class="return">
          &lt;-
        </span>
      </button>
      <ol>
        <li>

        </li>
      </ol>
      <button>
        <span class="return">
          -&gt;
        </span>
      </button>
    </nav>

    <p>

    </p>
  </main>
</template>

<script>
import Store from '@/store/index.ts'

export default {
  name: 'Favs',
  store: Store,
  beforeMount () {
    this.$store.commit('changeActiveMenu', 'favs')
  }
}
</script>
