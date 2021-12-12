import React from 'react';
import Todo  from './Todo';
import './css/todoList.css';

export default function TodoList({ list, setList }) {
    const toggle = (id) => {
        const _temp     = [...list];
        const todoItem  = _temp.find(todo => todo.id === id);
        todoItem.isDone = !todoItem.isDone;
        setList(_temp)
    }

    const deleteItem = (id) => {
        setList([...list].filter(todo => todo.id !== id));
    }

    return (
        <div className='todo'>
            { list.map(todo => <Todo key={ todo.id } todo={ todo } toggle={ toggle } deleteItem={ deleteItem }/>) }
        </div>
    );
}