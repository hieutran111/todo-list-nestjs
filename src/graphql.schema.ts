
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class TaskInput {
    name: string;
    status: string;
}

export class TaskUpdate {
    id: string;
    name: string;
    status: string;
}

export abstract class IMutation {
    abstract addTask(task: TaskInput): Task | Promise<Task>;

    abstract removeTask(id: string): Task | Promise<Task>;

    abstract updateTask(taskUpdate: TaskUpdate): Task | Promise<Task>;
}

export abstract class IQuery {
    abstract getAllTask(): Task[] | Promise<Task[]>;

    abstract getTaskById(id: string): Task | Promise<Task>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Task {
    id: string;
    name: string;
    status: string;
}
