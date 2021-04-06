import React from 'react'
import { Todo } from '../../utils/todos'
import Todolist from '../../utils/todos'
import { observer } from "mobx-react-lite";
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
                    {Todolist.todos.map((todo: Todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td className={styles.completionCell} onClick={() => Todolist.switchCompletionStatus(todo)}>{todo.isDone ? 'Completed ✔️' : 'Pending ⏳'}</td>
                                <td className={styles.urgenceCell} onClick={() => Todolist.switchUrgencyStatus(todo)}>{todo.isUrgent ? 'Urgent ❗' : 'Non-urgent 💤'}</td>
                                <td><button className={styles.deleteButton} onClick={() => Todolist.deleteTodo(todo.id)} type="button">Delete todo</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className={styles.buttonContainer}>
                <button type="button" onClick={() => Todolist.sortByUrgency()}>SORT BY URGENCY</button>
                <button type="button" onClick={() => Todolist.sortByCompleteness()}>SORT BY COMPLETENESS</button>
                <button type="button" onClick={() => Todolist.sortByBoth()}>SORT BY BOTH</button>

            </div>

        </>
    )

    if (Todolist.todos.length < 1) {
        return null;
    }

    return todoListJSX;
})