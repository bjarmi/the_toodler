/**
 * This module contains custom exceptions for Redux.
 */

/**
 * This class represents and error thrown when an Entity does not exist during lookup.
 * @extends Error
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
class EntityDoesNotExistError extends Error {

  /**
   * Construct an EntityDoesNotExistError
   *
   * @param {string} entityName Name of the entity that does not exist.
   * @param {number} id ID of the entity that was looked up.
   * @author Alexander Robertson -> contact-sasha@proton.me
   */
  constructor(entityName: string, id: number) {
    entityName[0].toUpperCase()
    const msg: string = `${entityName.charAt(0).toUpperCase() + entityName.slice(1)} with ID: '${id}' does not exist`
    super(msg);
    Object.setPrototypeOf(this, EntityDoesNotExistError)
  }
}

/**
 * This class represents and error thrown when a Board does not exist during lookup.
 * @extends EntityDoesNotExistError
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export class BoardDoesNotExistError extends EntityDoesNotExistError {

  /**
   * Construct a BoardDoesNotExistError
   *
   * @param {number} id ID of the board that was looked up.
   * @author Alexander Robertson -> contact-sasha@proton.me
   */
  constructor(id: number) {
    const entityName: string = "Board"
    super(entityName, id);
    Object.setPrototypeOf(this, BoardDoesNotExistError.prototype)
  }
}

/**
 * This class represents and error thrown when a List does not exist during lookup.
 * @extends EntityDoesNotExistError
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export class ListDoesNotExistError extends EntityDoesNotExistError {

  /**
   * Construct a ListDoesNotExistError
   *
   * @param {number} id ID of the list that was looked up.
   * @author Alexander Robertson -> contact-sasha@proton.me
   */
  constructor(id: number) {
    const entityName: string = "List"
    super(entityName, id);
    Object.setPrototypeOf(this, ListDoesNotExistError.prototype)
  }
}

/**
 * This class represents and error thrown when a Task does not exist during lookup.
 * @extends EntityDoesNotExistError
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export class TaskDoesNotExistError extends EntityDoesNotExistError {

  /**
   * Construct a TaskDoesNotExistError
   *
   * @param {number} id ID of the task that was looked up.
   * @author Alexander Robertson -> contact-sasha@proton.me
   */
  constructor(id: number) {
    const entityName: string = "Task"
    super(entityName, id);
    Object.setPrototypeOf(this, TaskDoesNotExistError.prototype)
  }
}

/**
 * This class represents an error thrown when an incorrect reducer action type is provided.
 * @extends Error
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export class IncorrectActionTypeError extends Error {

  /**
   * Construct an IncorrectActionTypeError
   *
   * @param {string} expected The expected action type to be provided.
   * @param {string} got The action type that was provided.
   * @author Alexander Robertson -> contact-sasha@proton.me
   */
  constructor(expected: string, got: string) {
    const msg: string = `Incorrect action type -> expected '${expected}', got '${got}'`
    super(msg);
    Object.setPrototypeOf(this, IncorrectActionTypeError)
  }
}
