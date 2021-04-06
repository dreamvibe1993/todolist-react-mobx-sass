import React from 'react'
import { Todo } from '../../utils/todos'
import Todolist from '../../utils/todos'
import { observer } from "mobx-react-lite";



export const TodoListComponent: React.FC = observer(() => {
    const todoListJSX = (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Todos
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
                    {Todolist.todos.map((todo: Todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td onClick={() => Todolist.switchCompletionStatus(todo)}>{todo.isDone ? 'Completed' : 'Pending'}</td>
                                <td onClick={() => Todolist.switchUrgencyStatus(todo)}>{todo.isUrgent ? 'Urgent' : 'Non-urgent'}</td>
                                <td><button onClick={() => Todolist.deleteTodo(todo.title)} type="button">Delete todo</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

    if (Todolist.todos.length < 1) {
        return <p>Add first 'todo' task to begin</p>;
    }

    return todoListJSX;
})