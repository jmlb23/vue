<template>
  <div class="container">
    <input v-model="current" />
    <p>cousas por facer {{ this.elementsToBeDone }}</p>
    <button :disabled="current.length === 0" @click="add">add</button>
    <div v-for="(element, index) in list">
      <todo-item
        :key="index"
        :todo="element.current"
        :done="element.done"
        @remove-event="remove"
        @check-event="isDoneListener"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TodoItem from "./TodoItem.vue";
import { Component, defineComponent } from "vue";

export default defineComponent({
  components: {
    "todo-item": TodoItem,
  },
  data(): { current: string; list: { current: string; done: boolean }[] } {
    return {
      current: "",
      list: [],
    };
  },
  computed: {
    elementsToBeDone(): number {
      return this.list.filter((x) => !x.done).length;
    },
  },
  methods: {
    remove(todo: string) {
      this.list = this.list.filter((x) => x.current != todo);
    },
    isDoneListener(todo: string, done: boolean) {
      const index = this.list.map((x) => x.current).indexOf(todo);
      console.log(index);
      this.list[index].done = done;
    },
    add() {
      this.list.push({
        current: this.current,
        done: false,
      });
      this.current = "";
    },
  },
});
</script>
