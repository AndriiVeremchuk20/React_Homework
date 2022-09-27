import { v4 as uuid } from 'uuid';
import { tasksExample } from "../../TasksExample";
import { Itodo, TASK_STATUS } from "../../types/todoTypes";
import { TodoActionsTypes, TODO_ACTIONS } from '../action_types/todo';

const initialState: Itodo[] = tasksExample;

export const todoReducer = (state: Itodo[] = initialState, action: TodoActionsTypes): Itodo[] => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TASK:
            const newTask: Itodo = {
                ...action.task,
                id: uuid(),
                status: TASK_STATUS.Open,
                creation_date: Date.now(),
                update_date: null
            }
            return [newTask, ...state];

        case TODO_ACTIONS.REMOVE_TASK:
            return state.filter((task) => task.id !== action.id);

        case TODO_ACTIONS.CHANGE_STATUS:
            return [...state.map((item) => {
                if (item.id === action.id) {
                    item.status = action.newStatus;
                    item.update_date = Date.now();
                }
                return item;
            })];

        case TODO_ACTIONS.EDIT_TASK:
            return state.map((item) => {
                if (item.id === action.id) {
                    item = {
                        ...item,
                        title: action.editetTask.title,
                        description: action.editetTask.description,
                        update_date: Date.now()
                    }
                }
                return item;
            })

        case TODO_ACTIONS.SORT_TASKS_CREATE:
            return [...state.sort((a, b) => b.creation_date - a.creation_date)];

        case TODO_ACTIONS.SORT_TASKS_UPDATE:
            return [...state.sort((a, b) => (b.update_date ?? b.creation_date) - (a.update_date ?? a.creation_date))];

        case TODO_ACTIONS.DEFAULT_ORDER:
            return [...state.sort((a, b) => a.status - b.status)];

        default:
            return [...state.sort((a, b) => a.status - b.status)];
    }
}   
