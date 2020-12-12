<template>
  <div id="app" class="lock-view">
    <div
      :data-theme="$store.state.mode"
      class="body"
    >
      <Header/>
      <router-view/>
      <Navigation/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Header,
    Navigation
  }
}
</script>
