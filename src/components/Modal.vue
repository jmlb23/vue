<style scoped>
.modal__container {
  position: relative;
  z-index: 3;
  background-color: white;
  border-radius: 5px;
  height: 300px;
  width: 400px;
  box-shadow: 1px 1px 1px #979797;
  margin: auto;
}
.modal-transparency {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transition: all 1s;
  z-index: 1;
  justify-content: center;
}
</style>

<template>
  <div :v-if="show" class="modal-transparency" @click="onClickPrevent()">
    <div class="modal__container" @click="onClickDismiss()">
      <header></header>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClickDismiss() {
      console.log("click");
      this.showing = false;
    },
    onClickPrevent(event: Event) {
      return;
    },
  },
  data() {
    return {
      showing: this.show,
    };
  },
});
</script>
