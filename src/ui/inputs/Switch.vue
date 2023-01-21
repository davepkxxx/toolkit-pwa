<script setup lang="ts">
import { ref, watch } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {
  modelValue: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const value = ref(props.modelValue)

watch(() => props.modelValue, newval => (value.value = newval))
watch(value, newval => emit('update:modelValue', newval))
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
  font-size: 20px;
  height: 1em;
  width: 2em;
  background: #8b8b8b;
  border-radius: 1em;
  cursor: pointer;
}

input {
  display: none;
}

span {
  display: block;
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: white;
  box-shadow: 0 0.1em 0.3em #0000004d;
  transition: all .3s;
}

input:checked + span {
  transform: translate3d(100%, 0, 0);
}
</style>
