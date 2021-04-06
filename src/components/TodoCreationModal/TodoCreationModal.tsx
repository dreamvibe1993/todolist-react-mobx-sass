import React, { useState } from 'react';
import Todolist, { Todo } from '../../utils/todos';

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
            <form className={styles.modalForm} name="todoModal" onSubmit={event => addNewTodo(event)}>
                <div className={styles.inputsContainer}>
                    <input name="todoTitle" onChange={event => refreshTodoTitle(event)} placeholder="Type a todo" type="text" value={todoTitle} required />
                </div>
                {
                    todoTitle.length > 0 && <div className={styles.options}>
                        <div className={styles.radioButtonsBlock}>
                            <strong>Is this task urgent?</strong>
                            <div className={styles.radioButtons}>
                                <input
                                    checked={urgency}
                                    id="yesInput"
                                    name="urgencyStatus"
                                    onChange={() => setUrgency(true)}
                                    type="radio" />
                                <label htmlFor="yesInput">Yes</label>
                                <input
                                    checked={!urgency}
                                    id="noInput"
                                    name="urgencyStatus"
                                    onChange={() => setUrgency(false)}
                                    type="radio" />
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