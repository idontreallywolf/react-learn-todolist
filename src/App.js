import './css/App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';

function App() {
    /* { id: uuid, name: name, isDone: bool } */
    const [list, setList] = useState([]);
    const todoItemName = useRef();

    const actionAddItem = (e) => {
        const todoName = todoItemName.current.value;
        if (todoName.length === 0) {
            return;
        }
        const newItem  = { id: uuidv4(), name: todoName, isDone: false };
        setList(currentList => [...currentList, newItem]);
        todoItemName.current.value = null;
        todoItemName.current.focus();
    }

    const actionClearDone = (e) => {
        setList(list.filter(todo => !todo.isDone));
    }

    const actionClearAll = (e) => {
        if (window.confirm('Are you sure you want to delete all items?')) {
            setList([]);
        }
    }

    return (
    <div className='App'>
        <div className='well controls'>
            <input ref={todoItemName} type="text" placeholder="e.g: buy groceries"/>
            <button className='button button-blue'  onClick={actionAddItem}>Add</button>
            <button className='button button-green' onClick={actionClearDone}>Clear Completed</button>
            <button className='button button-red'   onClick={actionClearAll}>Clear All</button>
        </div>
        <div className='well'>
            <TodoList list={ list } setList={ setList }/>
        </div>
    </div>
    );
}

export default App;
