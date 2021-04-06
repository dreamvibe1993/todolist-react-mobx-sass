import { makeAutoObservable } from "mobx";

export class Todo {
    id = Math.random();
    title = '';
    isDone = false;
    isUrgent = false

    constructor(title: string, urgent: boolean) {
        makeAutoObservable(this);
        this.title = title;
        this.isUrgent = urgent;
    }

}

class Todolist {
    todos: Todo[] = [];

    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.isDone).length;
    }
    constructor() {
        makeAutoObservable(this);
    }
    addTodo(todo: Todo) {
        this.todos.push(todo)
    }
    deleteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    switchCompletionStatus(todo: Todo) {
        const index = this.todos.indexOf(todo)
        this.todos[index].isDone = !this.todos[index].isDone
    }
    switchUrgencyStatus(todo: Todo) {
        const index = this.todos.indexOf(todo)
        this.todos[index].isUrgent = !this.todos[index].isUrgent
    }
    sortByUrgency() {
        this.todos = this.todos.sort((a: Todo, b: Todo) => {
            if (a.isUrgent) {
                return -1
            }
            return 1;
        })
    }
    sortByCompleteness() {
        this.todos = this.todos.sort((a: Todo, b: Todo) => {
            if (a.isDone) {
                return -1
            }
            return 1;
        })
    }
    sortByBoth() {
        this.todos = this.todos.sort((a: Todo, b: Todo) => {
            if (a.isDone && a.isUrgent) {
                return -1
            }
            return 1;
        })
    }
}

export default new Todolist();



