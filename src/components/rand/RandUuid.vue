<script setup lang="ts">
import Button from '@/ui/btns/Button.vue';
import Card from '@/ui/cards/Card.vue';
import CardBody from '@/ui/cards/CardBody.vue';
import CardFooter from '@/ui/cards/CardFooter.vue';
import CardHeader from '@/ui/cards/CardHeader.vue';
import Switch from '@/ui/inputs/Switch.vue';
import { ref, watch } from 'vue';

const value = ref('')
const upper = ref(false)
const unseparated = ref(false)

watch(upper, newval => (value.value = newval ? value.value.toUpperCase() : value.value.toLowerCase()))
watch(unseparated, newval => (value.value = newval
  ? value.value.replace(/-/g, '')
  : value.value.split('').reduce((s, c, i) => [8, 12, 16, 20].includes(i) ? s + '-' + c : s + c, '')))

function generate() {
  value.value = crypto.randomUUID()

  if (upper.value) {
    value.value = value.value.toUpperCase()
  }

  if (unseparated.value) {
    value.value = value.value.replace(/-/g, '');
  }
}

generate()
</script>

<template>
  <Card>
    <CardHeader>Random UUID</CardHeader>
    <CardBody>
      <div>{{ value }}</div>
      <div>
        <Switch v-model="upper" />
        {{ upper? 'Upper Case': 'Lower Case' }}
      </div>
      <div>
        <Switch v-model="unseparated" />
        {{ unseparated? 'No Separator': 'Allow Separator' }}
      </div>
    </CardBody>
    <CardFooter>
      <Button @click="generate">Generate</Button>
    </CardFooter>
  </Card>
</template>

<style scoped>
section {
  width: 350px;
}

main {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

main>*+* {
  margin-top: 10px;
}
</style>