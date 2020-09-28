<template>
  <div id="app" >
    <div
      :data-theme="$store.state.mode"
      class="body"
    >
      <Header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
