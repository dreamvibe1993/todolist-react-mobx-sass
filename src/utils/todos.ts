import { makeAutoObservable } from "mobx";

/** An instance of the class is a todo. */
export class Todo {
    /** Todo's id (generated randomly). */
    id = Math.random();
    /** Todo's title or name. */
    title = '';
    /** Todo's completion status. */
    isDone = false;
    /** Todo's urgency status. */
    isUrgent = false
    /**
     * @param title Todo's title.
     * @param urgent Todo's urgency status.
     */
    constructor(title: string, urgent: boolean) {
        makeAutoObservable(this);
        this.title = title;
        this.isUrgent = urgent;
    }

}

/** Todolist state. Instance of that is a todolist of todos. */
class Todolist {
    /** Array of todos */
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * Method that pushes a todo into the array.
     *
     * @param todo An instance of the todo class.
     */
    addTodo(todo: Todo) {
        this.todos.push(todo)
    }

    /**
     * Method that filters the array of todos and return that array without the chosen todo.
     *
     * @param id Todo's item id.
     */
    deleteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    /**
     * Method that's swithching todo's completion status.
     *
     * @param todo An instance of the todo class.
     */
    switchCompletionStatus(todo: Todo) {
        const index = this.todos.indexOf(todo)
        this.todos[index].isDone = !this.todos[index].isDone
    }

    /**
     * Method that's swithching todo's urgency status.
     *
    * @param todo An instance of the todo class.
    */
    switchUrgencyStatus(todo: Todo) {
        const index = this.todos.indexOf(todo)
        this.todos[index].isUrgent = !this.todos[index].isUrgent
    }

    /** Method which puts urgent todos first. */
    sortByUrgency() {
        this.todos = this.todos.sort((previous: Todo, next: Todo) => {
            if (previous.isUrgent) {
                return -1
            }
            return 1;
        })
    }

    /** Method which puts completed todos first. */
    sortByCompleteness() {
        this.todos = this.todos.sort((previous: Todo, next: Todo) => {
            if (previous.isDone) {
                return -1
            }
            return 1;
        })
    }

    /** Method which puts completed and also urgent todos first. */
    sortByBoth() {
        this.todos = this.todos.sort((previous: Todo, next: Todo) => {
            if (previous.isDone && previous.isUrgent) {
                return -1
            }
            return 1;
        })
    }
}

export default new Todolist();



