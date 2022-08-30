import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";


export const store = configureStore({
    reducer:{
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['todo/addTodo'],
            ignoredActionPaths: ['meta.arg', 'payload.created_at'],
            ignoredPaths: ['todo'],
        }
    })
})

export type RootState = ReturnType<typeof store.getState>