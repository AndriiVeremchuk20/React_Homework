import { Dispatch } from "react";
import { BaseTodo, TASK_STATUS } from "../../types/todoTypes";
import { TodoActionsTypes, TODO_ACTIONS } from "../action_types/todo";

export const addTask = (task: BaseTodo) => {
    return (dispatch: Dispatch<TodoActionsTypes>) => {
        dispatch({
            type: TODO_ACTIONS.ADD_TASK,
            task: task              
        })
    }
}

export const removeTask = (id: string) => {
    return (dispatch: Dispatch<TodoActionsTypes>) => {
        dispatch({
            type: TODO_ACTIONS.REMOVE_TASK,
            id: id
        })
    }
}


export const changeTaskStatus = (id: string, newStatus: TASK_STATUS) => {
    return (dispatch: Dispatch<TodoActionsTypes>) => {
        dispatch({
            type: TODO_ACTIONS.CHANGE_STATUS,
            id: id,
            newStatus: newStatus,
        })
    }
}

export const editTask = (id: string, editetTask: BaseTodo) => {
    return (dispatch: Dispatch<TodoActionsTypes>) => {
        dispatch({
            type: TODO_ACTIONS.EDIT_TASK,
            id: id,
            editetTask: editetTask,
        })
    }
}

export const sortTasksCreate = () => {
    return (dispatch: Dispatch<TodoActionsTypes>) => {
        dispatch({
            type: TODO_ACTIONS.SORT_TASKS_CREATE
            
        })
    }
}

export const sortTasksUpdate = () => {
    return (dispatch: Dispatch<TodoActionsTypes>) => {
        dispatch({
            type: TODO_ACTIONS.SORT_TASKS_UPDATE            
        })
    }
}

export const defaultOrder = () => {
    return (dispatch: Dispatch<TodoActionsTypes>) => {
        dispatch({
            type: TODO_ACTIONS.DEFAULT_ORDER            
        })
    }
}