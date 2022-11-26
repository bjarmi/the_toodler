/*
* This module contains the listSlice.
*/

import {createSlice, Slice} from "@reduxjs/toolkit";
import {IDepartmentAction} from "../interfaces";
import {IList} from "../../common/interfaces";
import {ListDoesNotExistError, IncorrectActionTypeError} from "../exceptions";
import {data} from "../dataStub"

/**
 * This interface defines the List department - a subset of the Redux store.
 *
 * @interface IListDepartment
 * @member {Set<IList>} boards A set of lists contained within this department.
 * @member {number} The ID that will be assigned to the next member of the department.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
interface IListDepartment {
  lists: Set<IList>
}

// Define the initial state for the List department.
const initialState: IListDepartment = {
  lists: new Set<IList>(data.lists)
}

/**
 * This function creates the listSlice.
 *
 * @property {string} name The name of the slice.
 * @property {IBoardDepartment} The initial state of this slice.
 * @property {Object} reducers This object contains all reducers for this slice.
 * @returns {Slice} A slice object.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
const listSlice: Slice = createSlice({
  name: "lists",
  initialState: initialState,
  reducers: {

    /**
     * This function adds a list to the List department of the Redux store.
     *
     * @param {IListDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "addList".
     * @author Alexander Robertson -> contact-sasha@proton.me
     */
    addList: (department: IListDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type === "addList")
        department.lists.add(action.payload)
      else
        throw new IncorrectActionTypeError("addBoard", action.type)
    },

    /**
     * This function edits a list in the List department of the Redux store.
     *
     * @param {IListDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "editList".
     * @throws ListDoesNotExistError If the List provided for editing does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     */
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

    /**
     * This function removes a list from the List department of the Redux store.
     *
     * @param {IListDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "removeList".
     * @throws ListDoesNotExistError If the List provided for removal does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     */
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