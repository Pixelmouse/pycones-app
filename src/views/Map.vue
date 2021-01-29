<template>
  <main
    class="map"
    ref="mapContainer"
  >
    <div class="map__main">
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
      </l-map>
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
          <ol class="map__legend--list">
            <li
              v-for="(location, index) in locations"
              :key="index"
            >
              <button
                class="map__legend--list-item"
              >
                <span>{{ index }}:</span>{{ location }}
              </button>
            </li>
          </ol>
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
import Store from '@/store/index.ts'
import { latLng } from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'Map',
  store: Store,
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      headerHeight: null,
      showMap: false,
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5
      },
      locations: [
        'Lorem ipsum dolor sit',
        'eriam fuga praesentium totam',
        'Cum dolorem iure placeat',
        'Assumenda culpa magni odio',
        'Ab animi eaque suscipit',
        'Eius minima quod vitae',
        'Commodi dolores minus odit',
        'Culpa fugiat laboriosam quos'
      ],
      showLegend: false
    }
  },
  beforeMount () {
    this.$store.commit('changeActiveMenu', 'map')
    this.headerHeight = document.querySelector('#header').scrollHeight
    setTimeout(() => {
      this.$refs.mapContainer.style.height = `calc(100% - 6rem - ${this.headerHeight}px)`
      this.showMap = true
    })
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
