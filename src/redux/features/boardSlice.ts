/*
* This module contains the boardSlice.
*/

import {createSlice, Slice} from "@reduxjs/toolkit";
import {IDepartmentAction} from "../interfaces";
import {IBoard} from "../../common/interfaces";
import {BoardDoesNotExistError, IncorrectActionTypeError} from "../exceptions";

// Define an interface for the boardSlice.
interface IBoardDepartment {
  boards: Set<IBoard>,
  next_id: number
}

// Define the initial state for the Board department.
const initialState: IBoardDepartment = {
  boards: new Set(),
  next_id: 1
}

// Create the boardSlice.
const boardSlice: Slice = createSlice({
  name: "boards",
  initialState: initialState,
  reducers: {

    addBoard: (department: IBoardDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type !== "addBoard")
        throw new IncorrectActionTypeError("addBoard", action.type)
      department.boards.add(action.payload)
    },

    editBoard: (department: IBoardDepartment, action: IDepartmentAction) => {
      // Validate action type.
      if (action.type !== "editBoard")
        throw new IncorrectActionTypeError("editBoard", action.type)

      // Change board if it exists.
      let boardFound: boolean = false
      for (let board of department.boards)
        if (board.id == action.payload.id) {
          boardFound = true
          board = action.payload
          break
        }

      // Throw an error if the board was not found.
      if (!boardFound)
        throw new BoardDoesNotExistError(action.payload.id)
    },

    removeBoard: (department, action) => {
      // Validate action type.
      if (action.type !== "removeBoard")
        throw new IncorrectActionTypeError("removeBoard", action.type)

      // Check if board exists.
      let boardFound: boolean = false
      for (const board of department.boards)
        if (board.id === action.payload.id) {
          boardFound = true
          break
        }

      // Delete board.
      if (boardFound)
        department.boards.delete(action.payload)
      else
        throw new BoardDoesNotExistError(action.payload.id)
    }
  }
})

// Export reducer actions.
export const {addBoard, editBoard, removeBoard} = boardSlice.actions
export default boardSlice.reducer