<script setup lang="ts">
import Button from '@/ui/btns/Button.vue'
import Card from '@/ui/cards/Card.vue'
import CardBody from '@/ui/cards/CardBody.vue'
import CardFooter from '@/ui/cards/CardFooter.vue'
import CardHeader from '@/ui/cards/CardHeader.vue'
import Input from '@/ui/inputs/Input.vue'
import Switch from '@/ui/inputs/Switch.vue'
import { computed, ref } from 'vue'

const value = ref(Math.random())
const rate = ref(1);
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
      <div>{{ text }}</div>
      <div>Rate:<Input type="number" v-model.number="rate" /></div>
      <div>
        <Switch v-model="rounding" />
        {{ rounding ? 'Integer': 'Float' }}
      </div>
    </CardBody>
    <CardFooter>
      <Button @click="generate">Generate</Button>
    </CardFooter>
  </Card>
</template>

<style scoped>
section {
  width: 200px;
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