import { ref, watch } from 'vue'

export function useValue(props: { modelValue: any }, emit: (e: 'update:modelValue', value: any) => void) {
  const value = ref(props.modelValue)
  watch(() => props.modelValue, newval => (value.value = newval))
  watch(value, newval => emit('update:modelValue', newval))
  return value
}
