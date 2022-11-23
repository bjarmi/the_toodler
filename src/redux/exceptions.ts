/**
 * This module contains custom exceptions for Redux.
 */

export class BoardDoesNotExistError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, BoardDoesNotExistError.prototype)
  }
}

export class ListDoesNotExistError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, ListDoesNotExistError.prototype)
  }
}

export class TaskDoesNotExistError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, TaskDoesNotExistError.prototype)
  }
}

export class IncorrectActionTypeError extends Error {
  constructor(msg: string) {
    super();
    Object.setPrototypeOf(this, IncorrectActionTypeError)
  }
}
