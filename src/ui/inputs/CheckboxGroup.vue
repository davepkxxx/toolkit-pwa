<script setup lang="ts">
import { useValue } from '@/components/hook/useValue';
import Checkbox from './Checkbox.vue';

export interface TextValueItem<T> {
  value: T
  text: string
}

const props = withDefaults(defineProps<{
  modelValue: any[]
  items: TextValueItem<any>[]
}>(), {
  modelValue: () => [],
  items: () => []
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
}>()

const value = useValue(props, emit)

function includes(item: TextValueItem<any>) {
  return value.value.some(e => e === item.value)
}

function onUpdate<T>(checked: boolean, item: TextValueItem<T>) {
  value.value = checked
    ? value.value.concat(item.value)
    : value.value.reduce((res, e) => e === item.value ? res : res.concat(e), [])
}
</script>

<template>
  <div class="ctor">
    <div v-for="item in items" class="item">
      <Checkbox :model-value="includes(item)" @update:model-value="newval => onUpdate(newval, item)" />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.ctor {
  display: inline-flex;
  flex-flow: row wrap;
}

.item {
  display: inline-flex;
  flex-flow: row nowrap;
}

span {
  margin: 0 5px;
}
</style>
