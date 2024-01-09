<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
//@ts-ignore
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
