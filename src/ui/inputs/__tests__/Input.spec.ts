import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import { nextTick } from 'vue'
import InputVue from '../Input.vue'

it("Input", async () => {
  const wrapper = mount(InputVue, {
    props: {
      modelValue: 'e0fe4f21-85e9-41fc-8077-8038ce4e9aa6'
    }
  })
  expect(wrapper.element).toBeInstanceOf(HTMLInputElement)

  const el = wrapper.element as HTMLInputElement
  expect(el.value).toBe('e0fe4f21-85e9-41fc-8077-8038ce4e9aa6')

  el.value = 'b52b4156-7549-4a2f-85e0-f5afff843316'
  wrapper.trigger('input')
  await nextTick()
  expect(wrapper.emitted()).toHaveProperty('update:modelValue', [['b52b4156-7549-4a2f-85e0-f5afff843316']])
})