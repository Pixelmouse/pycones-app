<template>
  <div class="map">
    <div>

    </div>
    <div class="map__legend">
      <button
        class="map__legend--toggle"
        @click.prevent="toggleLegend"
      >
        <p>
          Legenda
        </p>
        <div class="return">
          <span
            class="map__legend--arrow"
            :class="{ 'map__legend--open' : showLegend }"
          >&gt;</span>
        </div>
      </button>
      <transition
        @before-enter="beforeEnterLegend"
        @enter="enterLegend"
        @leave="leaveLegend"
      >
        <div
          v-if="showLegend"
          class="map__legend--list-wrapper"
        >
          <ol
            class="map__legend--list"
            :style="{ gridTemplateRows: `repeat(${calcGridRows}, minmax(2rem, min-content))` }"
          >
            <li
              v-for="(location, index) in locations"
              :key="index"
            >
              <button
                class="map__legend--list-item"
              >
                {{ index }}: {{ location }}
              </button>
            </li>
          </ol>
        </div>
      </transition>
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
        'Hic',
        'Lorem',
        'Animi',
        'Quam',
        'Asperiores',
        'Excepturi',
        'Beatae',
        'Hic'
      ],
      showLegend: false
    }
  },
  beforeMount () {
    this.$store.commit('changeActiveMenu', 'map')
  },
  computed: {
    calcGridRows: function () {
      return Math.ceil(this.locations.length / 2)
    }
  },
  methods: {
    toggleLegend: function () {
      this.showLegend = !this.showLegend
    },
    beforeEnterLegend: function (el) {
      el.style.height = '0'
    },
    enterLegend: function (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leaveLegend: function (el) {
      el.style.height = '0'
    }
  }
}
</script>
