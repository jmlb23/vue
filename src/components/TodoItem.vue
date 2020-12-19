<template>
  <div>
    <span v-if="!isDone" style="text-decoration: none">{{ todo }}</span>
    <span v-else style="text-decoration: line-through">{{ todo }}</span>
    <input
      style="display: inline"
      v-model="isDone"
      type="checkbox"
      @change="onCheck"
    />
    <button @click="onRemove">remove</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    todo: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isDone: this.done,
    };
  },
  methods: {
    onRemove(event: Event) {
      this.$emit("remove-event", this.todo);
    },
    onCheck(event: Event) {
      this.$emit("check-event", this.todo, this.isDone);
    },
  },
});
</script>
