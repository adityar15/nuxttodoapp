export default function useTodo()
{
    const todos = useState("todo-list", () => [])

    function addTodo(todoText)
    {
        todos.value = [...todos.value, { id: todos.value?.length + 1, text: todoText}]
    }

    return {
        todos,
        addTodo
    }
}