import { BaseTodo, TASK_STATUS } from "../../types/todoTypes"
import { TodoActionsTypes, TODO_ACTIONS } from "../action_types/todo"

export const addTask = (task: BaseTodo): TodoActionsTypes => ({
    type: TODO_ACTIONS.ADD_TASK,
    task,
});

export const removeTask = (id: string): TodoActionsTypes => ({
    type: TODO_ACTIONS.REMOVE_TASK,
    id,    
});

export const changeTaskStatus = (id: string, newStatus: TASK_STATUS): TodoActionsTypes => ({
    type: TODO_ACTIONS.CHANGE_STATUS,
    id, 
    newStatus,
});

export const editTask = (id: string, editetTask: BaseTodo): TodoActionsTypes => ({

    type: TODO_ACTIONS.EDIT_TASK,
    id, 
    editetTask,
});

export const sortTasksCreate = (): TodoActionsTypes => ({
    type: TODO_ACTIONS.SORT_TASKS_CREATE,
});


export const sortTasksUpdate = (): TodoActionsTypes => ({
    type: TODO_ACTIONS.SORT_TASKS_UPDATE,
});

export const defaultOrder = (): TodoActionsTypes => ({
    type: TODO_ACTIONS.DEFAULT_ORDER,
});