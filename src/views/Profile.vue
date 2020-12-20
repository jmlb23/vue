<template>
  <p>{{ username }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    username: String
  }
})
</script>

<style scoped>

</style>