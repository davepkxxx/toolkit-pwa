<script setup lang="ts">
defineProps<{
  fullWidth?: boolean
}>()
</script>

<template>
  <div :class="{ 'form-item-full-width': fullWidth }">
    <slot />
  </div>
</template>

<style scoped>
.form-item-full-width {
  width: 100%;
}
</style>
<style>
.form-item-full-width > * {
  width: 100%;
}
</style>
