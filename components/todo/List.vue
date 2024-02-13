<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{todo.text}}
        </li>
    </ul>
</template>

<script setup>
const {todos} = useTodo()
</script>

<style lang="scss" scoped>

</style>