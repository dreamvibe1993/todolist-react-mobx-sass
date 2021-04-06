/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { observer } from "mobx-react-lite";
import Todolist, { Todo } from '../../utils/todos'

import styles from './TodoListComponent.module.scss'

export const TodoListComponent: React.FC = observer(() => {
    const todoListJSX = (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Completion status
                        </th>
                        <th>
                            Urgency
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Todolist.todos.map((todo: Todo) => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td
                                className={styles.completionCell}
                                onClick={() => Todolist.switchCompletionStatus(todo)}
                            >{
                                    todo.isDone
                                        ? <p>Completed <span role="img">✔️</span></p>
                                        : <p>Pending <span role="img">⏳</span></p>}
                            </td>
                            <td
                                className={styles.urgenceCell}
                                onClick={() => Todolist.switchUrgencyStatus(todo)}
                            >{
                                    todo.isUrgent
                                        ? <p>Urgent <span role="img">❗</span></p>
                                        : <p>Non-urgent <span role="img">💤</span></p>}
                            </td>
                            <td>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => Todolist.deleteTodo(todo.id)}
                                    type="button"
                                >
                                    Delete todo
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.buttonContainer}>
                <button onClick={() => Todolist.sortByUrgency()} type="button">SORT BY URGENCY</button>
                <button onClick={() => Todolist.sortByCompleteness()} type="button">SORT BY COMPLETENESS</button>
                <button onClick={() => Todolist.sortByBoth()} type="button">SORT BY BOTH</button>

            </div>

        </>
    )

    if (Todolist.todos.length < 1) {
        return null;
    }

    return todoListJSX;
})