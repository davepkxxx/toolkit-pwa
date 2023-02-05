<template>
  <button type="button">
    <slot />
  </button>
</template>
<style scoped>
button {
  display: inline-block;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: #90caf9;
  font-family: inherit;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.75;
  min-width: 64px;
  padding: 8px 10px;
  transition: all 0.4s;
  cursor: pointer;
}

button:hover {
  background: rgba(144, 202, 249, 0.08);
  text-decoration: none;
}
</style>