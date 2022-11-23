/*
* This module contains the Redux store.
* */

import {bindActionCreators, combineReducers, configureStore} from "@reduxjs/toolkit";
import {boardActions, boardReducer, listActions, listReducer, taskActions, taskReducer} from "./features"

// Configure the Redux store.
export const store = configureStore({
  // Register reducers.
  reducer: combineReducers({
    "boards": boardReducer,
    "lists": listReducer,
    "tasks": taskReducer,
  })
})

// Export available actions from the store dispatcher.
export const dispatchAction = bindActionCreators({
  ...boardActions,
  ...listActions,
  ...taskActions
}, store.dispatch)

// Infer the type of store.getState.
export type RootState = ReturnType<typeof store.getState>

// Infer the type of store.dispatch.
export type AppDispatch = typeof store.dispatch
