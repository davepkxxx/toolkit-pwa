<script setup lang="ts">
import RandIp from '@/components/rand/RandIp.vue'
import RandNum from '@/components/rand/RandNum.vue'
import RandPwd from '@/components/rand/RandPwd.vue';
import RandUuid from '@/components/rand/RandUuid.vue'
</script>

<template>
  <div class="ctor">
    <RandIp />
    <RandNum />
    <RandPwd />
    <RandUuid />
  </div>
</template>

<style scoped>
.ctor {
  display: flex;
  align-items: flex-start;
}
.ctor > * {
  margin: 10px;
}
</style>