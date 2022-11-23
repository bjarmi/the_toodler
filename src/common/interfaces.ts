/*
 * This module contains Interfaces for the application.
 */

interface IEntity {
  id: number,
  name: string,
  description?: string
}

export interface IBoard extends IEntity {
  thumbnail?: string
}

export interface IList extends IEntity {
  boardID: number,
  colour: string
}

export interface ITask extends IEntity {
  listId: number,
  description: string,
  finished: boolean
}

