/**
 * This module contains the taskSlice.
 */

import { createSlice, Slice } from "@reduxjs/toolkit";
import { IDepartmentAction } from "../interfaces";
import { ITask } from "../../common/interfaces";
import { IncorrectActionTypeError, TaskDoesNotExistError } from "../exceptions";
import { data } from "../dataStub";

/**
 * This interface defines the Task department - a subset of the Redux store.
 *
 * @interface IBoardDepartment
 * @member {Set<IBoard>} boards A set of tasks contained within this department.
 * @member {number} The ID that will be assigned to the next member of the department.
 * @author Alexander Robertson -> contact-sasha@proton.me
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
interface ITaskDepartment {
  tasks: ITask[];
  nextId: number;
}

// Define the initial state for the Task department.
const initialState: ITaskDepartment = {
  tasks: data.tasks,
  nextId: data.tasks.length + 1,
};

/**
 * This function creates the taskSlice.
 *
 * @property {string} name The name of the slice.
 * @property {IBoardDepartment} The initial state of this slice.
 * @property {Object} reducers This object contains all reducers for this slice.
 * @returns {Slice} A slice object.
 * @author Alexander Robertson -> contact-sasha@proton.me
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
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
     * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
     */
    addTask: (department: ITaskDepartment, action: IDepartmentAction): void => {
      // Validate action type.
      if (action.type === "tasks/addTask") {
        department.tasks.push({ ...action.payload, id: department.nextId });
        department.nextId += 1;
      } else throw new IncorrectActionTypeError("tasks/addTask", action.type);
    },

    /**
     * This function edits a task in the Task department of the Redux store.
     *
     * @param {IBoardDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "editTask".
     * @throws ListDoesNotExistError If the Task provided for editing does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
     */
    editTask: (
      department: ITaskDepartment,
      action: IDepartmentAction
    ): void => {
      // Validate action type.
      if (action.type !== "tasks/editTask")
        throw new IncorrectActionTypeError("tasks/editTask", action.type);

      // Change task if it exists.
      let taskFound: boolean = false;
      for (const idx in department.tasks)
        if (department.tasks[idx].id === action.payload.id) {
          taskFound = true;
          department.tasks[idx] = action.payload;
          break;
        }

      // Throw error if the task was not found.
      if (!taskFound) throw new TaskDoesNotExistError(action.payload.id);
    },

    /**
     * This function removes a task from the List department of the Redux store.
     *
     * @param {IListDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "removeTask".
     * @throws ListDoesNotExistError If the Task provided for removal does not exist within the department.
     * @author Alexander Robertson -> contact-sasha@proton.me
     * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
     */
    removeTask: (
      department: ITaskDepartment,
      action: IDepartmentAction
    ): void => {
      // Validate action type.
      if (action.type !== "tasks/removeTask")
        throw new IncorrectActionTypeError("tasks/removeTask", action.type);

      // Check if task exists.
      let taskFound: boolean = false;
      for (const task of department.tasks)
        if (task.id === action.payload.id) {
          taskFound = true;
          break;
        }

      // Delete list.
      if (taskFound)
        department.tasks = department.tasks.filter(
          (task: ITask) => task.id !== action.payload.id
        );
      else throw new TaskDoesNotExistError(action.payload.id);
    },
  },
});

export const { addTask, editTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
