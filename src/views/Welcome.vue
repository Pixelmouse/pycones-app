<template>
  <div class="welcome">
    <ul
      v-if="step1"
      class="welcome__lang-list"
    >
      <li>
        <label class="welcome__lang-list--item">
          <input
            type="radio"
            name="lang"
            class="welcome__lang-list--input"
            @click="nextStep"
          >
          <p class="welcome__lang-list--content">
            <span class="welcome__lang-list--lang">
              <span class="welcome__lang-list--flag">
                🇪🇸
              </span>
              Bienvenido
            </span>
            <span class="return">
              -&gt;
            </span>
          </p>
        </label>
      </li>
      <li>
        <label class="welcome__lang-list--item">
          <input
            type="radio"
            name="lang"
            class="welcome__lang-list--input"
            @click="nextStep"
          >
          <p class="welcome__lang-list--content">
            <span class="welcome__lang-list--lang">
              <span class="welcome__lang-list--flag">
                🇬🇧
              </span>
              Welcome
            </span>
            <span class="return">
              -&gt;
            </span>
          </p>
        </label>
      </li>
      <li>
        <label class="welcome__lang-list--item">
          <input
            type="radio"
            name="lang"
            class="welcome__lang-list--input"
            @click="nextStep"
          >
          <p class="welcome__lang-list--content">
            <span class="welcome__lang-list--lang">
              <span class="welcome__lang-list--flag">
                🇩🇪
              </span>
              Willkommen
            </span>
            <span class="return">
              -&gt;
            </span>
          </p>
        </label>
      </li>
      <li>
        <label class="welcome__lang-list--item">
          <input
            type="radio"
            name="lang"
            class="welcome__lang-list--input"
            @click="nextStep"
          >
          <p class="welcome__lang-list--content">
            <span class="welcome__lang-list--lang">
              <span class="welcome__lang-list--flag">
                🇷🇺
              </span>
              Добропожаловать
            </span>
            <span class="return">
              -&gt;
            </span>
          </p>
        </label>
      </li>
    </ul>

    <ul
      v-if="step2"
      class="welcome__pref-list"
    >
      <li class="welcome__pref-list--dark-mode">
        <input
          type="radio"
          name="mode"
        >
        <p>
          _modoOscuro
        </p>
      </li>
      <li class="welcome__pref-list--light-mode">
        <input
          type="radio"
          name="mode"
        >
        <p>
          _modoClaro
        </p>
      </li>
      <li class="welcome__pref-list--start">
        <router-link
          :to="{ name: 'Home' }"
        >
          <span>
            Empezar
          </span>
          <span class="return">
            -&gt;
          </span>
        </router-link>
      </li>
      <li class="welcome__pref-list--return">
        <button
          @click="prevStep"
        >
          <span class="return">
            &lt;-
          </span>
          <span>
            Volver
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data: function () {
    return {
      step1: true,
      step2: false
    }
  },
  methods: {
    nextStep: function () {
      this.step1 = false
      this.step2 = true
    },
    prevStep: function () {
      this.step1 = true
      this.step2 = false
    }
  }
}
</script>
