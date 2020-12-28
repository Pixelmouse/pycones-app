<template>
  <div class="home">

    <p>

    </p>
  </div>
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
