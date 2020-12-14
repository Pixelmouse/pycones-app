<template>
  <div>
    <ul>
      <ConfigMode/>
    </ul>
    <ul class="config">
      <li>
        <label
          class="config__lang"
          :class="{ 'config__active-lang' : langSelected === 'es' }"
        >
          <input
            v-model="langSelected"
            type="radio"
            name="lang"
            value="es"
          >
          <p>
            _castellano
          </p>
        </label>
      </li>
      <li>
        <label
          class="config__lang"
          :class="{ 'config__active-lang' : langSelected === 'en' }"
        >
          <input
            v-model="langSelected"
            type="radio"
            name="lang"
            value="en"
          >
          <p>
            _english
          </p>
        </label>
      </li>
      <li>
        <label
          class="config__lang"
          :class="{ 'config__active-lang' : langSelected === 'de' }"
        >
          <input
            v-model="langSelected"
            type="radio"
            name="lang"
            value="de"
          >
          <p>
            _deutsh
          </p>
        </label>
      </li>
      <li>
        <label
          class="config__lang"
          :class="{ 'config__active-lang' : langSelected === 'ru' }"
        >
          <input
            v-model="langSelected"
            type="radio"
            name="lang"
            value="ru"
          >
          <p>
            _русский
          </p>
        </label>
      </li>
    </ul>
    <Navigation/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import ConfigMode from '@/components/ConfigMode.vue'
import Store from '@/store/index.ts'

export default {
  name: 'Home',
  store: Store,
  components: {
    Navigation,
    ConfigMode
  },
  data: function () {
    return {
      langSelected: 'es'
    }
  },
  beforeMount () {
    this.$store.commit('changeActiveMenu', 'config')
  }
}
</script>
