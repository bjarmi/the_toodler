/**
 * This module contains the subTaskSlice.
 */

import { createSlice, Slice } from "@reduxjs/toolkit";
import { IDepartmentAction } from "../interfaces";
import { ISubTask } from "../../common/interfaces";
import {
  IncorrectActionTypeError,
  SubTaskDoesNotExistError,
} from "../exceptions";
import { data } from "../dataStub";
import produce from "immer";

/**
 * This interface defines the Task department - a subset of the Redux store.
 *
 * @interface IBoardDepartment
 * @member {Set<IBoard>} boards A set of tasks contained within this department.
 * @member {number} The ID that will be assigned to the next member of the department.
 * @author Alexander Robertson -> contact-sasha@proton.me
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
interface ISubTaskDepartment {
  subTasks: ISubTask[];
  nextId: number;
}

// Define the initial state for the Task department.
const initialState: ISubTaskDepartment = {
  subTasks: data.subTasks,
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
const subTaskSlice: Slice = createSlice({
  name: "subTasks",
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
    addSubTask: produce(
      (department: ISubTaskDepartment, action: IDepartmentAction): void => {
        // Validate action type.
        if (action.type === "subTasks/addSubTask") {
          department.subTasks.push({
            ...action.payload,
            id: department.nextId,
          });
          department.nextId += 1;
        } else
          throw new IncorrectActionTypeError(
            "subTasks/addSubTask",
            action.type
          );
      }
    ),

    /**
     * This function edits a task in the Task department of the Redux store.
     *
     * @param {IBoardDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "editTask".
     * @throws SubTaskDoesNotExistError If the Task provided for editing does not exist within the department.
     * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
     */
    editSubTask: produce(
      (department: ISubTaskDepartment, action: IDepartmentAction): void => {
        // Validate action type.
        if (action.type !== "subTasks/editSubTask")
          throw new IncorrectActionTypeError("tasks/editTask", action.type);

        // Change task if it exists.
        let taskFound: boolean = false;
        for (const idx in department.subTasks)
          if (department.subTasks[idx].id === action.payload.id) {
            taskFound = true;
            department.subTasks[idx] = action.payload;
            break;
          }

        // Throw error if the sub task was not found.
        if (!taskFound) throw new SubTaskDoesNotExistError(action.payload.id);
      }
    ),

    /**
     * This function removes a task from the List department of the Redux store.
     *
     * @param {ISubTaskDepartment} department The department of the Redux store to modify.
     * @param {IDepartmentAction} action The action being carried out in order to modify the store.
     * @throws IncorrectActionTypeError if the provided action type is not "removeTask".
     * @throws SubTaskDoesNotExistError If the SubTask provided for removal does not exist within the department.
     * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
     */
    removeSubTask: produce(
      (department: ISubTaskDepartment, action: IDepartmentAction): void => {
        // Validate action type.
        if (action.type !== "subTasks/removeSubTask")
          throw new IncorrectActionTypeError(
            "subTasks/removeSubTask",
            action.type
          );

        // Check if task exists.
        let subTaskFound: boolean = false;
        for (const subTask of department.subTasks)
          if (subTask.id === action.payload.id) {
            subTaskFound = true;
            break;
          }

        // Delete list.
        if (subTaskFound)
          department.subTasks = department.subTasks.filter(
            (subTask: ISubTask) => subTask.id !== action.payload.id
          );
        else throw new SubTaskDoesNotExistError(action.payload.id);
      }
    ),
  },
});

export const { addSubTask, editSubTask, removeSubTask } = subTaskSlice.actions;
export default subTaskSlice.reducer;
