<style scoped>
aside {
  background-color: var(--color-secondary);
  border: 1px solid var(--color-primary);
  width: 15%;
  padding: 10px;
  border-radius: 5px;
  height: auto;
  margin: 0 0 auto auto;
}

ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  height: auto;
}
</style>

<template>
  <aside>
    <p>Popular tags</p>
    <ul>
      <tag :key="i" v-for="(t, i) in tags" :tag="t" @click="onSelectedTag(t)" />
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import Tag from "./TagsItem.vue";
export default defineComponent({
  components: {
    tag: Tag,
  },
  props: {
    tags: {
      type: Array,
      require: true,
    },
  },
  methods: {
    onSelectedTag(tag: String) {
      this.$emit("selected", tag)
    },
  },
  emits: ["selected"]

});
</script>
