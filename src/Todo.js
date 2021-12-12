import React from 'react';

export default function Todo({ todo, toggle, deleteItem }) {
    const toggleBox  = () => toggle(todo.id);
    const deleteTodo = () => deleteItem(todo.id);

    return <label>
                <div className='todo-element'>
                    <span><input type='checkbox' checked={ todo.isDone } onChange={ toggleBox }/></span>
                    <div className='todo-name'>
                        <span>
                            { todo.name }
                        </span>
                        <button onClick={ deleteTodo }>🗑</button>
                    </div>
                </div>
            </label>
}