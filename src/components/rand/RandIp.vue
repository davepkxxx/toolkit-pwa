<script setup lang="ts">
import Button from '@/ui/btns/Button.vue'
import Card from '@/ui/cards/Card.vue'
import CardBody from '@/ui/cards/CardBody.vue'
import CardActions from '@/ui/cards/CardActions.vue'
import CardHeader from '@/ui/cards/CardHeader.vue'
import FormItem from '@/ui/form/FormItem.vue'
import Input from '@/ui/inputs/Input.vue'
import { ref } from 'vue'

const value = ref('')

function rand() {
  return Math.floor(Math.random() * 256)
}

function generate() {
  value.value = [rand(), rand(), rand(), rand()].join('.')
}

generate()
</script>

<template>
  <Card>
    <CardHeader>Random IP</CardHeader>
    <CardBody>
      <FormItem full-width>
        <Input :model-value="value" readonly :border="false" />
      </FormItem>
    </CardBody>
    <CardActions>
      <Button @click="generate">GENERATE</Button>
    </CardActions>
  </Card>
</template>

<style scoped>
section {
  width: 130px;
}
</style>