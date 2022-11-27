/*
 * This module contains Interfaces for the application.
 */

/**
 * This interface is an abstract interface for all entities within the application.
 *
 * @interface IEntity
 * @member {number} id The ID of the entity.
 * @member {string} name The name of the entity.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export interface IEntity {
  id: number;
  name: string;
}

/**
 * This interface represents Boards within the application.
 *
 * @interface IBoard
 * @member {string} thumbnail A stringified URL to a thumbnail image -> optional.
 * @member {string} description The description of the entity -> optional.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export interface IBoard extends IEntity {
  thumbnailPhoto?: string;
  description?: string;
}

/**
 * This interface represents Lists within the application.
 *
 * @interface IList
 * @member {number} boardID The ID of the board this list resides in.
 * @member {string} colour A hexadecimal representation of the colour for this list.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export interface IList extends IEntity {
  boardId: number;
  color: string;
}

/**
 * This interface represents Tasks within the application.
 *
 * @interface ITask
 * @member {number} listID The ID of the list this task resides in.
 * @member {string} description A required description of the task.
 * @member {boolean} finished A boolean value representing whether this task has been finished.
 * @author Alexander Robertson -> contact-sasha@proton.me
 */
export interface ITask extends IEntity {
  listId: number;
  description: string;
  isFinished: boolean;
}
/**
 * This interface is an abstract interface for all entity forms within the
 * application.
 *
 * @interface IEntityForm
 * @member {string} name The name of the entity.
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
export interface IEntityForm {
  name: string;
}

/**
 * This interface represents Boards within the application.
 *
 * @interface IBoard
 * @member {string} thumbnail A stringified URL to a thumbnail image -> optional.
 * @member {string} description The description of the entity -> optional.
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
export interface IBoardForm extends IEntityForm {
  thumbnailPhoto?: string;
  description?: string;
}

/**
 * This interface represents Lists within the application.
 *
 * @interface IList
 * @member {number} boardID The ID of the board this list resides in.
 * @member {string} colour A hexadecimal representation of the colour for this list.
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
export interface IListForm extends IEntityForm {
  boardId: number;
  color: string;
}

/**
 * This interface represents Tasks within the application.
 *
 * @interface ITask
 * @member {number} listID The ID of the list this task resides in.
 * @member {string} description A required description of the task.
 * @member {boolean} finished A boolean value representing whether this task has been finished.
 * @author Bjarmi Anes Eiðsson -> bjarmi19@ru.com
 */
export interface ITaskForm extends IEntityForm {
  listId: number;
  description: string;
  isFinished: boolean;
}
