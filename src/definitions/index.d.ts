declare namespace TodoApp {
    export interface Todo {
        text: string;
        completed: boolean;
    }

    export type VisibilityFilter = "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";

    export interface AppState {
        visibilityFilter: VisibilityFilter;
        todos: Todo[]
    }
}