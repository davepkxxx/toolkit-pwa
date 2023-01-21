<template>
  <button type="button">
    <slot />
  </button>
</template>
<style scoped>
button {
  display: inline-block;
  border-radius: 7px;
  border: none;
  background: #1875FF;
  color: var(--color-text);
  font-family: inherit;
  text-align: center;
  font-size: 13px;
  box-shadow: 0px 14px 56px -11px #1875FF;
  min-width: 10em;
  padding: 1em;
  transition: all 0.4s;
  cursor: pointer;
}
</style>