import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillFileAdd, AiOutlineClose } from 'react-icons/ai'
import ReactModal from 'react-modal'
import { v4 } from 'uuid'
import useTodo from '../store/useTodo'
import TodoItem from './TodoItem'
function Todo() {
    const [todoTitle, setTodoTitle] = useState('')
    const { todos, addTodo, value, todoUpdate, updateTodo, setValue, openModal, setOpenModal } = useTodo(
        (state) => state,
    )

    const handleAddTodo = () => {
        addTodo({
            id: v4(),
            title: value,
            complete: false,
        })
        setValue('')
    }

    const handleUpate = () => {
        console.log(todoUpdate)
        console.log(todos)
        updateTodo(todoUpdate, todoTitle)
    }

    return (
        <div className='todo'>
            <div className='todo-wrap'>
                <h2>Todo simple</h2>
                <div className='todo-input'>
                    <input
                        value={value}
                        type='text'
                        placeholder='Enter your todo'
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <span onClick={handleAddTodo}>
                        <AiFillFileAdd />
                    </span>
                </div>
                <div className='todo-list'>
                    <h3>Task</h3>
                    <div className='todo-content'>
                        {todos.length > 0 && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
