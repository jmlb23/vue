<template>
  <div>
    <h1>Sign in</h1>
    <router-link to="/signup">Sing up</router-link>
    <input v-model="email" type="text" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <button @click="onClickSignIn()">Sign In</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { apiClient } from "../data/Api";
import { isOther } from "../data/Error";
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onClickSignIn() {
      apiClient
        .login({ email: this.email, password: this.password })
        .then((x) =>
          isOther(x)
            ? this.$store.dispatch("token", x.token)
            : Promise.resolve(x)
        );
    },
  },
});
</script>
<style scoped>
div {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
}
div > * {
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
}

div > input {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
