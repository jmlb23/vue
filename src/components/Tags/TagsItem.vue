<style scoped>
li {
  list-style: none;
}
</style>

<template>
  <li>{{ tag }}</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "tag",
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
});
</script>
