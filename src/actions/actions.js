

// Action types 
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


// Other constants
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Action creators 

// addTodo action function returns a type ADD_TODO, and a text of that todo item
export function addTodo(text) {
    return { type: ADD_TODO, text}
}
// toggleTodo action function returns a type TOGGLE_TODO, and a index
export function toggleTodo(index) {
    return {type: TOGGLE_TODO, index}
}

// setVisibilityFilter action function returns a type ADD_TODO, and a filter 
export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}