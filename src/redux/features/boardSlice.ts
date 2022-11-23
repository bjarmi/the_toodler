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

// Define the initial state for the Board store department.
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
      if (action.type === "addBoard")
        department.boards.add(action.payload)
      else
        throw new IncorrectActionTypeError("addBoard", action.type)

      // Add board.
      const new_board: IBoard = action.payload
      department.boards.add(new_board)
    },
    editBoard: (department: IBoardDepartment, action: IDepartmentAction) => {

      // Validate action type.
      if (action.type === "editBoard")
        department.boards.add(action.payload)
      else
        throw new IncorrectActionTypeError("editBoard", action.type)

      // Parse the new board from the action payload.
      const editedBoard: IBoard = action.payload

      // Change board if it exists.
      let boardFound = false
      for (let board of department.boards)
        if (board.id == editedBoard.id) {
          boardFound = true
          board = editedBoard
        }

      // Throw an error if the board was not found.
      if (!boardFound)
        throw new BoardDoesNotExistError(editedBoard.id)
    },
    removeBoard: (department, action) => {

      // Validate action type.
      if (action.type === "removeBoard")
        department.boards.add(action.payload)
      else
        throw new IncorrectActionTypeError("removeBoard", action.type)

      const deleteBoard: IBoard = action.payload

      let boardFound = false
      for (let board of department.boards)
        if (board.id == deleteBoard.id) {
          boardFound = true
          break
        }

      // Delete board.
      if (boardFound)
        department.boards.delete(deleteBoard)
      else
        throw new BoardDoesNotExistError(deleteBoard.id)
    }
  }
})

// Export reducer actions.
export const {addBoard, editBoard, removeBoard} = boardSlice.actions
export default boardSlice.reducer