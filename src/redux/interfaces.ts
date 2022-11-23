/*
* This module contains interfaces for Redux.
*/

/**
 * This interface represents actions within the Redux store.
 *
 * @interface IDepartmentAction
 * @member {any} payload The payload of the action (ex. an instance of IBoard or IList).
 * @member {string} type The type of this action (ex. "addTask" or "removeList").
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export interface IDepartmentAction {
  payload: any,
  type: string
}