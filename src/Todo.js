import React from 'react';

export default function Todo({ todo, toggle }) {
    const toggleBox = () => toggle(todo.id);
    return <label>
                <div className='todo-element'>
                    <span><input type='checkbox' checked={ todo.isDone } onChange={ toggleBox }/></span>
                    <div className='todo-name'>{ todo.name }</div>
                </div>
            </label>
}