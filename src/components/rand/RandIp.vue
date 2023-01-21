<script setup lang="ts">
import Button from '@/ui/btns/Button.vue'
import Card from '@/ui/cards/Card.vue'
import CardBody from '@/ui/cards/CardBody.vue'
import CardFooter from '@/ui/cards/CardFooter.vue'
import CardHeader from '@/ui/cards/CardHeader.vue'
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
      <div>{{ value }}</div>
    </CardBody>
    <CardFooter>
      <Button @click="generate">Generate</Button>
    </CardFooter>
  </Card>
</template>

<style scoped>
section {
  width: 170px;
}
</style>