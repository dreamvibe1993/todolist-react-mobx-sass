import React, { useState } from 'react';
import { Todo } from '../../utils/todos';
import Todolist from '../../utils/todos';
export const TodoCreationModal: React.FC = () => {
    const [todoTitle, setTodoTitle] = useState<string>('')
    const [urgency, setUrgency] = useState<boolean>(true)

    function refreshTodoTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTodoTitle(event.target.value);
    }
    function addNewTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const todo = new Todo(todoTitle, urgency)
        return Todolist.addTodo(todo)
    }

    return <form name="todoModal" onSubmit={event => addNewTodo(event)}>
        <input onChange={event => refreshTodoTitle(event)} type="text" name="todoTitle" placeholder="Type a todo" required></input>
        <label><input type="radio" onChange={() => setUrgency(true)} name="urgencyStatus" checked={urgency}/>Yes</label>
        <label><input type="radio" onChange={() => setUrgency(false)} name="urgencyStatus" checked={!urgency}/>No</label>
        <button type="submit">Add</button>
    </form>
}