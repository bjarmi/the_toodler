/*
 * This module contains the boardSlice.
 */

import { createSlice, Slice } from "@reduxjs/toolkit";
import { IDepartmentAction } from "../interfaces";
import { IBoard } from "../../common/interfaces";
import {
  BoardDoesNotExistError,
  IncorrectActionTypeError,
} from "../exceptions";
import { data } from "../dataStub";
import produce from "immer";

/**
 * This interface defines the Board department - a subset of the Redux store.
 *
 * @interface IBoardDepartment
 * @member {Set<IBoard>} boards A set of boards contained within this department.
 * @member {number} The ID that will be assigned to the next member of the department.
 * @author Alexander Robertson -> contact-sasha@proton.me
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
interface IBoardDepartment {
  boards: IBoard[];
  nextId: number;
}

// Define the initial state for the Board department.
const initialState: IBoardDepartment = {
  boards: data.boards,
  nextId: data.boards.length + 1,
};

/**
 * This function creates the boardSlice.
 *
 * @property {string} name The name of the slice.
 * @property {IBoardDepartment} The initial state of this slice.
 * @property {Object} reducers This object contains all reducers for this slice.
 * @returns {Slice} A slice object.
 * @author Alexander Robertson -> contact-sasha@proton.me
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
const boardSlice: Slice = createSlice({
  name: "boards",
  initialState: initialState,
  reducers: {
    /**
     * This function adds a board to the Board department of the Redux store.
     *
     * @param {IBoardDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "addBoard".
     * @author Alexander Robertson -> contact-sasha@proton.me
     * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
     */
    addBoard: produce(
      (
        department: IBoardDepartment,
        action: IDepartmentAction
      ): IBoardDepartment => {
        // Validate action type.
        if (action.type !== "boards/addBoard")
          throw new IncorrectActionTypeError("addBoard", action.type);
        department.boards.push({ ...action.payload, id: department.nextId });
        department.nextId += 1;
        return department;
      }
    ),

    /**
     * This function edits a board in the Board department of the Redux store.
     *
     * @param {IBoardDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError If the provided action type is not "editBoard".
     * @throws BoardDoesNotExistError If the Board provided for editing does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
     */
    editBoard: produce(
      (department: IBoardDepartment, action: IDepartmentAction) => {
        // Validate action type.
        if (action.type !== "boards/editBoard")
          throw new IncorrectActionTypeError("editBoard", action.type);

        // Change board if it exists.
        let boardFound: boolean = false;
        for (const idx in department.boards)
          if (department.boards[idx].id === action.payload.id) {
            boardFound = true;
            department.boards[idx] = action.payload;
            break;
          }

        // Throw an error if the board was not found.
        if (!boardFound) throw new BoardDoesNotExistError(action.payload.id);
        return department;
      }
    ),

    /**
     * This function removes a board from the Board department of the Redux store.
     * @param {IBoardDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError If the provided action type is not "removeBoard".
     * @throws BoardDoesNotExistError If the Board provided for removal does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     */
    removeBoard: produce((department, action) => {
      // Validate action type.
      if (action.type !== "boards/removeBoard")
        throw new IncorrectActionTypeError("removeBoard", action.type);

      // Check if board exists.
      let boardFound: boolean = false;
      for (const board of department.boards)
        if (board.id === action.payload.id) {
          boardFound = true;
          break;
        }

      // Delete board.
      if (boardFound)
        department.boards = department.boards.filter(
          (board: IBoard) => board.id !== action.payload.id
        );
      else throw new BoardDoesNotExistError(action.payload.id);
      return department;
    }),
  },
});

// Export reducer actions.
export const { addBoard, editBoard, removeBoard } = boardSlice.actions;
export default boardSlice.reducer;
