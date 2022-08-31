import { createSlice } from "@reduxjs/toolkit";


interface ADDTODO {
    type: string,
    payload: {
        title: string,
        id: number,
        created_at: string
    }
}

interface REMOVETODO {
    type: string,
    payload: {
        id: number
    }
}


type Todo = {
    title: string,
    id: number
    created_at: string
}

window.localStorage.todos = JSON.stringify(new Array());

let initialState: Todo[] = JSON.parse(window.localStorage.todos);

export const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state: Todo[], action: ADDTODO) => {
            const todos = [action.payload, ...state];
            const json = JSON.stringify(todos);
            window.localStorage.todos = json;
            return todos
        },

        removeTodo: (state: Todo[], action: REMOVETODO) => {
            const todos = state.filter(todo => todo.id !== action.payload.id);
            const json = JSON.stringify(todos);
            window.localStorage.todos = json
            return todos
        }
    }

})

export const { addTodo, removeTodo } = todoReducer.actions;

export default todoReducer.reducer;