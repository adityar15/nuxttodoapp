<template>
  <input
    v-bind="$attrs"
    v-model="modelValue"
    class="border border-gray-400 rounded-md p-2 flex-grow"
  />
</template>

<script setup>
const modelValue = defineModel()
</script>

<style lang="scss" scoped>
</style>