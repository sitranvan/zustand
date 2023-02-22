import React, { useEffect } from 'react'
import { AiOutlineDelete, AiOutlineFileDone } from 'react-icons/ai'
import useTodo from '../store/useTodo'

function TodoItem({ todo }) {
    const { removeTodo, completeTodo } = useTodo((state) => state)

    return (
        <div className='todo-item'>
            <span className={`${todo.complete ? 'complete' : null}`}>{todo.title}</span>
            <div className='todo-action'>
                <AiOutlineDelete onClick={() => removeTodo(todo.id)} />
                <AiOutlineFileDone onClick={() => completeTodo(todo)} />
            </div>
        </div>
    )
}

export default TodoItem
