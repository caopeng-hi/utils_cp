<template>
  <button class="test-class" @click="clickHandler">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { hello } from "utils_cp/shared";

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: "World",
  }
);

function clickHandler() {
  hello(props.text);
}
</script>
<style lang="scss">
.test-class {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
</style>
