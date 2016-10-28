import { combineReducers } from 'redux';

function todos(state: Todo.Item[] = [], action: Todo.Action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    completed: false,
                    text: action.text
                } as Todo.Item
            ]
        case "TOGGLE_TODO":
            return state.map((todo, index) => {
                if (index === action.index) {
                    todo = _.assign({}, todo, { completed: !todo.completed })
                }
                return todo;
            })
        default:
            return state;
    }
}

function visibilityFilter(state: Todo.VisibilityFilter = "ALL", action: Todo.Action) {
    switch (action.type) {
        case "SET_VISIBILITY":
            return action.filter;
        default:
            return state;
    }
}

export const todoApp = combineReducers({
    todos,
    visibilityFilter
})