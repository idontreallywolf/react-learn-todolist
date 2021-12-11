import React from 'react';

export default function Todo({ todo, toggle }) {
    const toggleBox = () => toggle(todo.id);
    return <div className='todo-element'>
                <span><input type='checkbox' checked={ todo.isDone } onChange={toggleBox}/></span>
                <span>{ todo.name }</span>
            </div>
}