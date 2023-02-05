<script setup lang="ts">
import Button from '@/ui/btns/Button.vue'
import Card from '@/ui/cards/Card.vue'
import CardBody from '@/ui/cards/CardBody.vue'
import CardActions from '@/ui/cards/CardActions.vue'
import CardHeader from '@/ui/cards/CardHeader.vue'
import FormItem from '@/ui/form/FormItem.vue'
import Input from '@/ui/inputs/Input.vue'
import Switch from '@/ui/inputs/Switch.vue'
import { computed, ref } from 'vue'

const value = ref('')
const upper = ref(false)
const unseparated = ref(false)

const text = computed(() => {
  let res = value.value

  if (upper.value) {
    res = res.toUpperCase()
  }

  if (unseparated.value) {
    res = res.replace(/-/g, '')
  }

  return res
})

function generate() {
  value.value = crypto.randomUUID()
}

generate()
</script>

<template>
  <Card>
    <CardHeader>Random UUID</CardHeader>
    <CardBody>
      <FormItem full-width>
        <Input :model-value="text" readonly :border="false" />
      </FormItem>
      <FormItem full-width>
        <Switch v-model="upper" />
        {{ upper ? 'Upper Case': 'Lower Case' }}
      </FormItem>
      <FormItem full-width>
        <Switch v-model="unseparated" />
        {{ unseparated ? 'No Separator': 'Allow Separator' }}
      </FormItem>
    </CardBody>
    <CardActions>
      <Button @click="generate">GENERATE</Button>
    </CardActions>
  </Card>
</template>

<style scoped>
section {
  width: 320px;
}

main {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

main > * + * {
  margin-top: 10px;
}
</style>