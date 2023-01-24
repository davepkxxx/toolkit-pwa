import { shallowRef, watch } from 'vue'

export function useValue<T>(props: { modelValue: T }, emit: (e: 'update:modelValue', value: T) => void) {
  const value = shallowRef(props.modelValue)
  watch(() => props.modelValue, newval => (value.value = newval))
  watch(value, newval => emit('update:modelValue', newval))
  return value
}
