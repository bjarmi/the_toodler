/*
* This module contains the listSlice.
*/

import {createSlice, Slice} from "@reduxjs/toolkit";
import {IDepartmentAction} from "../interfaces";
import {IList} from "../../common/interfaces";
import {ListDoesNotExistError, IncorrectActionTypeError} from "../exceptions";

// Define an interface for the listSlice.
interface IListDepartment {
  lists: Set<IList>,
  next_id: number
}

// Define the initial state for the List department.
const initialState: IListDepartment = {
  lists: new Set(),
  next_id: 1
}

const listSlice: Slice = createSlice({
  name: "lists",
  initialState: initialState,
  reducers: {

    addList: (department: IListDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type === "addList")
        department.lists.add(action.payload)
      else
        throw new IncorrectActionTypeError("addBoard", action.type)
    },

    editList: (department: IListDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type !== "editList")
        throw new IncorrectActionTypeError("editList", action.type)

      // Change list if it exists.
      let listFound: boolean = false
      for (let list of department.lists)
        if (list.id == action.payload.id) {
          listFound = true
          list = action.payload
          break
        }

      // Throw error if the list was not found.
      if (!listFound)
        throw new ListDoesNotExistError(action.payload.id)
    },

    removeList: (department: IListDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type !== "removeList")
        throw new IncorrectActionTypeError("removeList", action.type)

      // Check if list exists.
      let listFound: boolean = false
      for (const list of department.lists)
        if (list.id === action.payload.id) {
          listFound = true
          break
        }

      // Delete list.
      if (listFound)
        department.lists.delete(action.payload)
      else
        throw new ListDoesNotExistError(action.payload.id)
    },
  }
})

// Export reducer actions.
export const {addList, editList, removeList} = listSlice.actions
export default listSlice.reducer