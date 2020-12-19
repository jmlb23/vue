<style scoped>
.home__div__banner {
  background-color: var(--color-primary);
  width: 100%;
  height: 50px;
}
</style>

<template>
  <div class="home__div__banner">
    <h1>Home</h1>
  </div>
  <tag-list :tags="[1, 2, 3, 4, 5]" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagsList from "../components/Tags/TagsList.vue";
export default defineComponent({
  components: {
    "tag-list": TagsList,
  },
});
</script>
