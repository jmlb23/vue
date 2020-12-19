<style scoped>
ul {
  border: 1px solid navy;
}
</style>

<template>
  <ul>
    <tag :key="i" v-for="(t, i) in tags" :tag="t" @click="onSelectedTag(t)" />
  </ul>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import Tag from "./TagsItem.vue";
export default defineComponent({
  name: "tag-list",
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
      console.log(tag);
    },
  },
});
</script>
