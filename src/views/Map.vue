<template>
  <div class="map">
    <div>

    </div>
    <div class="map__legend">
      <button class="map__legend--toggle">
        <p>
          Legenda
        </p>
        <div class="return">
          &gt;
        </div>
      </button>
      <ol class="map__legend--list">
        <li
          v-for="(location, index) in locations"
          :key="index"
          class="map__legend--list-item"
        >
          <button>{{ index }}: {{ location }}</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Store from '@/store/index.ts'

export default {
  name: 'Map',
  store: Store,
  data () {
    return {
      locations: [
        'Lorem',
        'Animi',
        'Quam',
        'Asperiores',
        'Excepturi',
        'Beatae',
        'Hic'
      ]
    }
  },
  beforeMount () {
    this.$store.commit('changeActiveMenu', 'map')
  }
}
</script>
