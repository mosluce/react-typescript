import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './../constants/todo';
import _ = require('lodash'); //免 es6-shim

const initState: TodoApp.AppState = {
    visibilityFilter: "SHOW_ALL",
    todos: []
}

export function todos(state: TodoApp.Todo[] = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return _.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

export function visibilityFilter(state: TodoApp.VisibilityFilter = "SHOW_ALL", action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// export function todoApp(state = initState, action): any {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return _.assign({}, state, {
//                 filter: action.filter
//             });
//         case ADD_TODO:
//             return _.assign({}, state, {
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             });
//         case TOGGLE_TODO:
//             return state.todos.map((todo, index) => {
//                 if (index === action.index) {
//                     return _.assign({}, todo, { completed: !todo.completed })
//                 }
//                 return todo;
//             })
//         default:
//             return state;
//     }
// }
