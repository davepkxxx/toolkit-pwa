<script setup lang="ts">
import { useValue } from '@/hook/useValue'

const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {
  modelValue: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const value = useValue(props, emit)
</script>

<template>
  <span class="checkbox-root">
    <input type="checkbox" v-model="value" />
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path v-if="value" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      <path v-else d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
  </span>
</template>

<style scoped>
.checkbox-root {
  display: inline-flex;
  position: relative;
  padding: 9px;
  cursor: pointer;
}

input {
  display: none;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}

input:checked + svg {
  color: #90caf9;
}
</style>
