/*
* This module contains the Redux store.
* */

import {bindActionCreators, combineReducers, configureStore, EnhancedStore, Reducer} from "@reduxjs/toolkit";
import {boardActions, boardReducer, listActions, listReducer, taskActions, taskReducer} from "./features"

/**
 * This function creates the Redux store.
 *
 * @property {Reducer} A combined reducer of all reducers within the store.
 * @returns {EnhancedStore} A Redux store object.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export const store: EnhancedStore = configureStore({
  reducer: combineReducers({
    "boards": boardReducer,
    "lists": listReducer,
    "tasks": taskReducer,
  })
})

/**
 * This function exports all the reducer actions from the store action dispatcher.
 *
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export const dispatchAction = bindActionCreators({
  ...boardActions,
  ...listActions,
  ...taskActions
}, store.dispatch)

// Infer the type of store.getState.
export type RootState = ReturnType<typeof store.getState>

// Infer the type of store.dispatch.
export type AppDispatch = typeof store.dispatch
