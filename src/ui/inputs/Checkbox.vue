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
  <label>
    <input type="checkbox" v-model="value" />
    <span />
  </label>
</template>

<style scoped>
label {
  display: inline-block;
  position: relative;
  border: 2px solid #343434;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
}

input {
  display: none;
}

span {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background-color: #ccc;
  transition: all 0.3s;
  border-radius: 5px;
}

span:after {
  content: "";
  position: absolute;
  display: none;
}

input:checked + span {
  background-color: #47da99;
  animation: pop 0.5s;
  animation-direction: alternate;
}

input:checked ~ .checkmark:after {
  display: block;
}
</style>
