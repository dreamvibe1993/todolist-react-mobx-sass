import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../../utils/todos';
import Todolist from '../../utils/todos';
import styles from './TodoCreationModal.module.scss';
export const TodoCreationModal: React.FC = () => {
    const [todoTitle, setTodoTitle] = useState<string>('')
    const [urgency, setUrgency] = useState<boolean>(true)

    function refreshTodoTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTodoTitle(event.target.value);
    }

    function addNewTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const todo = new Todo(todoTitle, urgency)
        Todolist.addTodo(todo)
    }

    return (
        <div className={styles.modalContainer} >
            <form name="todoModal" onSubmit={event => addNewTodo(event)} className={styles.modalForm}>
                <div className={styles.inputsContainer}>
                    <input onChange={event => refreshTodoTitle(event)}  value={todoTitle} type="text" name="todoTitle" placeholder="Type a todo" required></input>
                </div>
                {
                    todoTitle.length > 0 && <div className={styles.options}>
                        <div className={styles.radioButtonsBlock}>
                            <strong>IS THIS TODO URGENT?</strong>
                            <div className={styles.radioButtons}>
                                <input type="radio" id="yesInput" onChange={() => setUrgency(true)} name="urgencyStatus" checked={urgency} />
                                <label htmlFor="yesInput">Yes</label>
                                <input type="radio" id="noInput" onChange={() => setUrgency(false)} name="urgencyStatus" checked={!urgency} />
                                <label htmlFor="noInput" >No</label>
                            </div>
                        </div>
                        <div className={styles.btnContainer}>
                            <button type="submit">Add</button>
                        </div>
                    </div>
                }
            </form>
        </div>
    )
}