<script setup lang="ts">
import Button from '@/ui/btns/Button.vue'
import Card from '@/ui/cards/Card.vue'
import CardBody from '@/ui/cards/CardBody.vue'
import CardActions from '@/ui/cards/CardActions.vue'
import CardHeader from '@/ui/cards/CardHeader.vue'
import Input from '@/ui/inputs/Input.vue'
import Switch from '@/ui/inputs/Switch.vue'
import { computed, ref } from 'vue'
import FormItem from '@/ui/form/FormItem.vue'

const value = ref(Math.random())
const rate = ref(1)
const rounding = ref(false)

const text = computed(() => {
  let res = value.value * rate.value

  if (rounding.value) {
    res = Math.floor(res)
  }

  return res
})

function generate() {
  value.value = Math.random()
}

generate()
</script>

<template>
  <Card>
    <CardHeader>Random Number</CardHeader>
    <CardBody>
      <FormItem full-width>
        <Input :model-value="text" readonly :border="false" />
      </FormItem>
      <FormItem full-width>
        <Input type="number" label="Rate" v-model.number="rate" />
      </FormItem>
      <FormItem full-width>
        <Switch v-model="rounding" />
        {{ rounding ? 'Integer': 'Float' }}
      </FormItem>
    </CardBody>
    <CardActions>
      <Button @click="generate">GENERATE</Button>
    </CardActions>
  </Card>
</template>

<style scoped>
section {
  width: 180px;
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