/**
 * This module contains the taskSlice.
 */

import {createSlice, Slice} from "@reduxjs/toolkit";
import {IDepartmentAction} from "../interfaces";
import {ITask} from "../../common/interfaces";
import {IncorrectActionTypeError, TaskDoesNotExistError} from "../exceptions";
import {data} from "../dataStub"

/**
 * This interface defines the Task department - a subset of the Redux store.
 *
 * @interface IBoardDepartment
 * @member {Set<IBoard>} boards A set of tasks contained within this department.
 * @member {number} The ID that will be assigned to the next member of the department.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
interface ITaskDepartment {
  tasks: Set<ITask>
}

// Define the initial state for the Task department.
const initialState: ITaskDepartment = {
  tasks: new Set<ITask>(data.tasks)
}

/**
 * This function creates the taskSlice.
 *
 * @property {string} name The name of the slice.
 * @property {IBoardDepartment} The initial state of this slice.
 * @property {Object} reducers This object contains all reducers for this slice.
 * @returns {Slice} A slice object.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
const taskSlice: Slice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {

    /**
     * This function adds a task to the Task department of the Redux store.
     *
     * @param {IBoardDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "addTask".
     * @author Alexander Robertson -> contact-sasha@proton.me
     */
    addTask: (department: ITaskDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type === "addTask")
        department.tasks.add(action.payload)
      else
        throw new IncorrectActionTypeError("addTask", action.type)
    },

    /**
     * This function edits a task in the Task department of the Redux store.
     *
     * @param {IBoardDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "editTask".
     * @throws ListDoesNotExistError If the Task provided for editing does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     */
    editTask: (department: ITaskDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type !== "editTask")
        throw new IncorrectActionTypeError("editTask", action.type)

      // Change task if it exists.
      let taskFound: boolean = false
      for (let task of department.tasks)
        if (task.id === action.payload.id) {
          taskFound = true
          task = action.payload
          break
        }

      // Throw error if the task was not found.
      if (!taskFound)
        throw new TaskDoesNotExistError(action.payload.id)
    },

    /**
     * This function removes a task from the List department of the Redux store.
     *
     * @param {IListDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "removeTask".
     * @throws ListDoesNotExistError If the Task provided for removal does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     */
    removeTask: (department: ITaskDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type !== "removeTask")
        throw new IncorrectActionTypeError("removeTask", action.type)

      // Check if task exists.
      let taskFound: boolean = false
      for (const task of department.tasks)
        if (task.id === action.payload.id) {
          taskFound = true
          break
        }

      // Delete list.
      if (taskFound)
        department.tasks.delete(action.payload)
      else
        throw new TaskDoesNotExistError(action.payload.id)
    },
  }
})

export const {addTask, editTask, removeTask} = taskSlice.actions
export default taskSlice.reducer