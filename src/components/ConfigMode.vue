<template>
  <li class="mode">
    <div class="mode__dark">
      <input
        type="radio"
        name="mode"
        v-model="mode"
        :value="'dark'"
        @change="changeMode"
      >
      <p>
        _modoOscuro
      </p>
    </div>
    <div class="mode__light">
      <input
        type="radio"
        name="mode"
        v-model="mode"
        :value="'light'"
        @change="changeMode"
      >
      <p>
        _modoClaro
      </p>
    </div>
  </li>
</template>

<script>
import Store from '@/store/index.ts'

export default {
  name: 'ConfigMode',
  store: Store,
  data: function () {
    return {
      mode: 'dark'
    }
  },
  methods: {
    changeMode: function () {
      this.$store.commit('changeMode', this.mode)
    }
  }
}
</script>
