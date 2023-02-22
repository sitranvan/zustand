import { create } from 'zustand'

const useTodo = create((set) => ({
    value: '',
    todos: [],
    openModal: false,
    setOpenModal: () => set((state) => ({ openModal: !state.openModal })),
    setValue: (value) => set(() => ({ value })),
    addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
    completeTodo: (todo) =>
        set((state) => ({
            todos: state.todos.map((x) => (x.id === todo.id ? { ...x, complete: !x.complete } : x)),
        })),
}))

export default useTodo
