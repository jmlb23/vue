<style>
:root {
  --color-primary: #ff8a65;
  --color-secondary: #dedede;
  --text-color: #000000;
  font-family: "Roboto", sans-serif;
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
      <router-link v-if="!isLogged" class="nav__link" to="/signup"
        >Sign up</router-link
      >
      <router-link v-if="!isLogged" class="nav__link" to="/signin"
        >Sign in</router-link
      >
      <router-link v-if="isLogged" class="nav__link" to="/editor"
        >New Article</router-link
      >
      <router-link v-if="isLogged" class="nav__link" to="/settings"
        >Settings</router-link
      >
      <router-link
        v-if="isLogged"
        class="nav__link"
        :to="`/profile/${user?.username}`"
      >
        {{ user?.username }}
      </router-link>
    </nav>
  </header>
  <router-view></router-view>
  <footer></footer>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { apiClient } from "../data/Api";
import { Profile } from "../data/ProfileDTOS";
import { User } from "../data/UserDTOS";
import { router } from "../routes";

export default defineComponent({
  name: "app",
  computed: {
    isLogged(): boolean {
      return this.$store.getters.isLogged;
    },
    user(): User | undefined {
      return this.$store.getters.user;
    },
  },
});
</script>
