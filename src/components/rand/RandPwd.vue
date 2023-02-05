<script setup lang="ts">
import Button from '@/ui/btns/Button.vue'
import Card from '@/ui/cards/Card.vue'
import CardBody from '@/ui/cards/CardBody.vue'
import CardActions from '@/ui/cards/CardActions.vue'
import CardHeader from '@/ui/cards/CardHeader.vue'
import FormItem from '@/ui/form/FormItem.vue'
import CheckboxGroup from '@/ui/inputs/CheckboxGroup.vue'
import Input from '@/ui/inputs/Input.vue'
import { ref, watch } from 'vue'

function concatChars(start: number, end: number, chars = ''): string {
  return start > end ? chars : concatChars(start + 1, end, chars + String.fromCharCode(start))
}

const allowItems = [
  { value: 'losercase', text: 'a-z', chars: concatChars(97, 122) },
  { value: 'uppercase', text: 'A-Z', chars: concatChars(65, 90) },
  { value: 'numbers', text: '0-9', chars: concatChars(48, 57) },
  { value: 'symbols', text: 'symbols', chars: '!#$%&*@^' },
]

const value = ref('')
const length = ref(8)
const allows = ref(['losercase', 'uppercase', 'numbers', 'symbols'])

function generate() {
  let chars = allowItems.reduce((res, item) => allows.value.reduce((res, allow) => (
    item.value === allow ? res + item.chars : res
  ), res), '')

  value.value = ''
  for (let i = 0; i < length.value; i++) {
    value.value += chars.charAt(Math.floor(chars.length * Math.random()))
  }
}

watch(length, generate)
watch(allows, generate)

generate()
</script>

<template>
  <Card>
    <CardHeader>Random Password</CardHeader>
    <CardBody>
      <FormItem full-width>
        <Input :model-value="value" readonly :border="false" />
      </FormItem>
      <FormItem full-width>
        <Input type="number" label="Length" v-model.number="length" />
      </FormItem>
      <FormItem full-width>
        <CheckboxGroup v-model="allows" :items="allowItems" />
      </FormItem>
    </CardBody>
    <CardActions>
      <Button @click="generate">GENERATE</Button>
    </CardActions>
  </Card>
</template>

<style scoped>
section {
  width: 190px;
}

main {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

main > * + * {
  margin-top: 10px;
}

input {
  margin-left: 5px;
  width: 120px;
}
</style>