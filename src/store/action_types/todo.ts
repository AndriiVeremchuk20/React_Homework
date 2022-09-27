import { BaseTodo, TASK_STATUS } from "../../types/todoTypes";

export enum TODO_ACTIONS {
    ADD_TASK = 'todo/add_task',
    REMOVE_TASK = 'todo/remove_task',
    CHANGE_STATUS = 'todo/change_status',
    EDIT_TASK = 'todo/edit_task',
    SORT_TASKS_CREATE = 'todo/order_tasks_create',
    SORT_TASKS_UPDATE = 'todo/order_tasks_update',
    DEFAULT_ORDER = 'todo/default_order'
}

export interface AddTaskAction {
    type: typeof TODO_ACTIONS.ADD_TASK;
    task: BaseTodo;
}

export interface RemoveTaskAction {
    type: typeof TODO_ACTIONS.REMOVE_TASK;
    id: string;
}

export interface ChangeTaskStatus {
    type: typeof TODO_ACTIONS.CHANGE_STATUS,
    id: string;
    newStatus: TASK_STATUS;
}

export interface EditTask {
    type: typeof TODO_ACTIONS.EDIT_TASK;
    id: string;
    editetTask: BaseTodo;
}

export interface OrderTasksCreate{
    type: TODO_ACTIONS.SORT_TASKS_CREATE;
}

export interface OrderTasksUpdate{
    type: TODO_ACTIONS.SORT_TASKS_UPDATE;
}

export interface DefaultOrder {
    type: TODO_ACTIONS.DEFAULT_ORDER;    
}

export type TodoActionsTypes =
    AddTaskAction |
    RemoveTaskAction |
    ChangeTaskStatus |
    EditTask |
    OrderTasksCreate |
    OrderTasksUpdate | 
    DefaultOrder;