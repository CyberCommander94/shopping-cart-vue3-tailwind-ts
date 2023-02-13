<template>
  <div class="
    w-full
    h-full
    flex
    flex-col
    items-center
    justify-center"
  >
    <slot>{{ props.message }}</slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: string
}>();
</script>
