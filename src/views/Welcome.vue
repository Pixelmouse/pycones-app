<template>
  <main class="welcome">
    <transition
      :name="`carousel-${carouselTransition}`"
    >
      <!-- welcome choose language view -->
      <ul
        v-if="step1"
        key="step-1"
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
      <!-- .welcome choose language view -->

      <!-- welcome config view -->
      <ul
        v-if="step2"
        key="step-2"
        class="welcome__pref-list"
      >
        <ConfigMode/>
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
      <!-- .welcome config view -->
    </transition>
  </main>
</template>

<script>
import ConfigMode from '@/components/ConfigMode.vue'
import Store from '@/store/index.ts'

export default {
  name: 'Welcome',
  store: Store,
  components: {
    ConfigMode
  },
  data: function () {
    return {
      step1: true,
      step2: false,
      carouselTransition: 'next'
    }
  },
  beforeMount () {
    this.hideNav(true)
  },
  methods: {
    hideNav: function (bool) {
      this.$store.commit('hideNav', bool)
    },
    nextStep: function () {
      this.step1 = false
      this.step2 = true
      this.carouselTransition = 'next'
    },
    prevStep: function () {
      this.step1 = true
      this.step2 = false
      this.carouselTransition = 'prev'
    }
  },
  destroyed () {
    this.hideNav(false)
  }
}
</script>
