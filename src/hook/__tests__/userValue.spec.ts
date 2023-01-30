import { expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import { useValue } from '../useValue'

it('useValue', async () => {
  const props = reactive({ modelValue: '5230eed0-5544-4d46-8440-f15a33f78990' })
  const emit = vi.fn()
  const value = useValue(props, emit)
  expect(value).toBeDefined()
  expect(value.value).toBe(props.modelValue)

  value.value = 'cc1c2b31-18d2-4ee4-999c-933167cd7aa1'
  await nextTick()
  expect(emit).toBeCalledWith('update:modelValue', 'cc1c2b31-18d2-4ee4-999c-933167cd7aa1')

  emit.mockReset()
  props.modelValue = 'a285755b-e58b-45ef-8d90-35077c59d2f2'
  await nextTick()
  expect(value.value).toBe('a285755b-e58b-45ef-8d90-35077c59d2f2')
  expect(emit).toBeCalledWith('update:modelValue', 'a285755b-e58b-45ef-8d90-35077c59d2f2')
})