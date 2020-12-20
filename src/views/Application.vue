<style>
:root {
  --color-primary: #b2fab4;
  --color-secondary: #eceff1;
}
body {
  padding: 0;
  margin: 0;
}
</style>

<template>
  <header>
    <router-link to="/">Home</router-link>
    <router-link to="signup">Sign up</router-link>
    <router-link to="signin">Sign in</router-link>
  </header>
  <router-view></router-view>
  <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "app",
});
</script>
