<template>
  <div id="app" >
    <div
      data-theme="dark"
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
