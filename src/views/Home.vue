<template>
  <main class="home">

    <p>

    </p>
  </main>
</template>

<script>
import Store from '@/store/index.ts'

export default {
  name: 'Home',
  store: Store,
  beforeMount () {
    this.$store.commit('changeActiveMenu', 'main')
  }
}
</script>
