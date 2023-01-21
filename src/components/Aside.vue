<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import IconMinus from './icons/IconMinus.vue'
import IconPlus from './icons/IconPlus.vue'

interface Nav {
  text: string
  link?: string
  expanded?: boolean
  items?: NavItem[]
}

interface NavItem {
  text: string
  link?: string
}

const navs: Ref<Nav[]> = ref([
  {
    text: "Random",
    items: [
      {
        text: "Integer"
      },
      {
        text: "Number"
      },
      {
        text: "IP"
      },
      {
        text: "UUID"
      }
    ]
  }
])
</script>

<template>
  <aside>
    <ul v-if="navs && navs.length">
      <li v-for="nav in navs" :key="nav.text">
        <nav>
          <span>{{ nav.text }}</span>
          <i v-if="nav.items && nav.items.length" @click="nav.expanded = !nav.expanded">
            <IconMinus v-if="nav.expanded" />
            <IconPlus v-else />
          </i>
        </nav>
        <ul v-if="nav.items && nav.items.length" v-show="nav.expanded">
          <li v-for="item in nav.items" :key="item.text">
            <nav>{{ item.text }}</nav>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  padding: 20px 0;
  background: var(--color-background-soft);
}

li {
  list-style: none;
}

nav {
  display: flex;
  line-height: 3.5;
}

li li nav {
  line-height: 2.5;
}

nav > span {
  flex: auto;
}

nav > i {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: none;
  width: 50px;
  cursor: pointer;
}

i > * {
  width: 18px;
  height: 20px;
}
</style>
