
export function addTodo(text: string): Todo.Action {
    return {
        type: "ADD_TODO",
        text
    }
}

export function toggleTodo(index: number): Todo.Action {
    return {
        type: "TOGGLE_TODO",
        index
    }
}

export function setVisibility(filter: Todo.VisibilityFilter): Todo.Action {
    return {
        type: "SET_VISIBILITY",
        filter
    }
}