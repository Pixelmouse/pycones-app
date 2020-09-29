<template>
  <div>
    <ul>
      <ConfigMode/>
    </ul>
    <ul class="config">
      <li>
        <label class="config__lang">
          <input
            type="radio"
            name="lang"
          >
          <p>
            _castellano
          </p>
        </label>
      </li>
      <li>
        <label class="config__lang">
          <input
            type="radio"
            name="lang"
          >
          <p>
            _english
          </p>
        </label>
      </li>
      <li>
        <label class="config__lang">
          <input
            type="radio"
            name="lang"
          >
          <p>
            _deutsh
          </p>
        </label>
      </li>
      <li>
        <label class="config__lang">
          <input
            type="radio"
            name="lang"
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

export default {
  name: 'Home',
  components: {
    Navigation,
    ConfigMode
  }
}
</script>
