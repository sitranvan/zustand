import React from 'react'
import counterStore from '../store/counterStore'

function Counter() {
    const { count, increase, decrease } = counterStore((state) => state)
    return (
        <div className='counter'>
            <button onClick={decrease}>Decrease</button>
            <span>{count}</span>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default Counter
