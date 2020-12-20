<style>
:root {
  --color-primary: #ff8a65;
  --color-secondary: #dedede;
  --text-color: #000000;
  font-family: 'Roboto', sans-serif;
}

body {
  padding: 0;
  margin: 0;
}

nav {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
  padding: 20px 5% 20px 5%;
}

.nav__link {
  margin-left: 10px;
}
</style>

<template>
  <header>
    <nav class="header__main">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="signup">Sign up</router-link>
      <router-link class="nav__link" to="signin">Sign in</router-link>
    </nav>
  </header>
  <router-view></router-view>
  <footer></footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "app",
});
</script>
