<template>
  <form @submit.prevent="handleSubmit" class="w-full flex items-center gap-2">
    <Input type="text" v-model="todoText" placeholder="Enter todo item" />
    <Button type="submit">Add</Button>
  </form>
</template>

<script setup>
const todoText = ref("");

const {todos, addTodo} = useTodo()


function handleSubmit()
{
    addTodo(todoText.value)
    todoText.value = ""
}
</script>

<style lang="scss" scoped>
</style>