/*
* This module contains the Redux store.
* */

import {configureStore, combineReducers, bindActionCreators} from "@reduxjs/toolkit";

// Configure the Redux store.
export const store = configureStore({
  // Register reducers.
  reducer: combineReducers({})
})

// Export available actions from the store dispatcher.
export const dispatchAction = bindActionCreators({}, store.dispatch)

// Infer the type of store.getState.
export type RootState = ReturnType<typeof store.getState>

// Infer the type of store.dispatch.
export type AppDispatch = typeof store.dispatch
