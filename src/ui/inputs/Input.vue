<script setup lang="ts">
import { useValue } from '@/hook/useValue'

const props = withDefaults(defineProps<{
  modelValue?: string | number
  type?: string,
  readonly?: boolean,
  label?: string
  border?: boolean
}>(), {
  modelValue: '',
  type: 'text',
  readonly: false,
  label: '',
  border: true
})

const emit = defineEmits<
  (e: 'update:modelValue', value: string | number) => void
>()

const value = useValue(props, emit)
</script>

<template>
  <span class="input-root">
    <label v-if="label">{{ label }}</label>
    <input :type="type" v-model="value" />
    <fieldset v-if="border">
      <legend v-if="label">{{ label }}</legend>
    </fieldset>
  </span>
</template>

<style scoped>
.input-root {
  display: inline-flex;
  box-sizing: border-box;
}

label {
  top: -5px;
  left: 14px;
  position: absolute;
  font-size: .75rem;
  line-height: 1;
  z-index: 1;
}

input {
  display: block;
  box-sizing: content-box;
  padding: 6px 0 7px;
  width: 100%;
  height: 1.1876em;
  border: 0;
  background: none;
  color: currentColor;
}

input:focus {
  outline: none;
}

label + input {
  padding: 18.5px 14px;
}

input:focus + fieldset {
  border-color: #90caf9;
  border-width: 2px;
}

fieldset {
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 4px;
  pointer-events: none;
}

legend {
  padding-left: 5px;
  padding-right: 5px;
  font-size: .75em;
  visibility: hidden;
}
</style>