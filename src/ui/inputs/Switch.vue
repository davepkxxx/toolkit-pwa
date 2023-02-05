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
  <span class="switch-root" @click="value = !value">
    <input type="checkbox" v-model="value" />
    <span class="switch-trigger">
      <i />
    </span>
    <span class="switch-track" />
  </span>
</template>

<style scoped>
.switch-root {
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
  color: #bdbdbd;
  z-index: 1;
  cursor: pointer;
}

input {
  display: none;
}


.switch-track {
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: #fff;
}

.switch-trigger {
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  padding: 9px;
  flex: 0 0 auto;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

i {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: currentColor;
  color: #bdbdbd;
  z-index: 1;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

input:checked + .switch-trigger {
  transform: translateX(20px);
}
</style>
