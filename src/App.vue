<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/props">Props</router-link> |
    <router-link to="/provide">Provide</router-link> |
    <router-link to="/telepo">Telepo</router-link> |
    <router-link to="/pinia">Pinia</router-link>
  </nav>
  <router-view @memo-save="saveMemo" />
</template>
<script>
import { computed } from "vue";

export default {
  data() {
    return {
      memo: "",
    };
  },
  methods: {
    saveMemo(text) {
      this.memo = text;
    },
  },
  provide() {
    return {
      prvMemo: computed(() => this.memo),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgba(188, 45, 201, 0.589);
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 16px;
}
</style>
