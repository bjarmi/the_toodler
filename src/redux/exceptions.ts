/**
 * This module contains custom exceptions for Redux.
 */

class EntityDoesNotExistError extends Error {
  constructor(entityName, id: number) {
    entityName[0].toUpperCase()
    const msg: string = `${entityName.charAt(0).toUpperCase() + entityName.slice(1)} with ID: '${id}' does not exist`
    super(msg);
    Object.setPrototypeOf(this, EntityDoesNotExistError)
  }
}

export class BoardDoesNotExistError extends EntityDoesNotExistError {
  constructor(id: number) {
    const entityName: string = "Board"
    super(entityName, id);
    Object.setPrototypeOf(this, BoardDoesNotExistError.prototype)
  }
}

export class ListDoesNotExistError extends EntityDoesNotExistError {
  constructor(id: number) {
    const entityName: string = "List"
    super(entityName, id);
    Object.setPrototypeOf(this, ListDoesNotExistError.prototype)
  }
}

export class TaskDoesNotExistError extends EntityDoesNotExistError {
  constructor(id: number) {
    const entityName: string = "Task"
    super(entityName, id);
    Object.setPrototypeOf(this, TaskDoesNotExistError.prototype)
  }
}

export class IncorrectActionTypeError extends Error {
  constructor(expected: string, got: string) {
    const msg: string = `Incorrect action type -> expected '${expected}', got '${got}'`
    super(msg);
    Object.setPrototypeOf(this, IncorrectActionTypeError)
  }
}
