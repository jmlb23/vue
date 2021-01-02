<template>
  <div>
    <button @click="onClickLogout">logout</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {router} from "../routes";

export default defineComponent({
  methods: {
    onClickLogout() {
      this.$store.dispatch("logout", undefined);
      router.push("/");
    },
  },
});
</script>
