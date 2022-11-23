/**
 * This module contains the taskSlice.
 */

import {createSlice, Slice} from "@reduxjs/toolkit";
import {IDepartmentAction} from "../interfaces";
import {ITask} from "../../common/interfaces";
import {IncorrectActionTypeError, TaskDoesNotExistError} from "../exceptions";

// Define an interface for the taskSlice.
interface ITaskDepartment {
  tasks: Set<ITask>,
  next_id: number
}

// Define the initial state for the Task department.
const initialState: ITaskDepartment = {
  tasks: new Set(),
  next_id: 1
}

const taskSlice: Slice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {

    addTask: (department: ITaskDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type === "addTask")
        department.tasks.add(action.payload)
      else
        throw new IncorrectActionTypeError("addTask", action.type)
    },

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