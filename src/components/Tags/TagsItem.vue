<style scoped>
li {
  list-style: none;
  background-color: var(--color-primary);
  border: 1px solid transparent;
  border-radius: 20px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 8px;
  margin-bottom: 8px;
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
