declare namespace Todo {
    export interface Item {
        text: string;
        completed: boolean;
    }

    export interface State {
        visibilityFilter: VisibilityFilter,
        todos: Item[]
    }

    export interface Action extends Redux.Action {
        type: Todo.ActionType;
        text?: string;
        filter?: Todo.VisibilityFilter;
        index?: number;
    }

    export type VisibilityFilter = "ALL" | "ACTIVE" | "COMPLETED";
    export type ActionType = "ADD_TODO" | "TOGGLE_TODO" | "SET_VISIBILITY";
}