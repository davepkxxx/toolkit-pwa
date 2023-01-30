<script setup lang="ts">
import { useValue } from '@/hook/useValue'

const props = withDefaults(defineProps<{
  modelValue: string | number;
  type: string;
}>(), {
  modelValue: '',
  type: 'text'
})

const emit = defineEmits<
  (e: 'update:modelValue', value: string | number) => void
>()

const value = useValue(props, emit)
</script>

<template>
  <input :type="type" v-model="value" />
</template>

<style scoped>
input {
  background-color: #212121;
  color: var(--color-text);
  max-width: 190px;
  height: 40px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
}

input:focus {
  color: rgb(0, 255, 255);
  background-color: #212121;
  outline-color: rgb(0, 255, 255);
  box-shadow: -3px -3px 15px rgb(0, 255, 255);
  transition: .1s;
  transition-property: box-shadow;
}
</style>