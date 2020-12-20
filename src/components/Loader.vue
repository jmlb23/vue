<style scoped>
svg{
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: inherit;
}
.loader__path {
  fill: var(--color-primary);
}

</style>

<template>
  <div>
    <svg
        :height="height"
        :width="width"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
    >
      <path
          class="loader__path"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue, {defineComponent} from "vue";

export default defineComponent({
  name: "loader",
  props: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
  },
});
</script>
