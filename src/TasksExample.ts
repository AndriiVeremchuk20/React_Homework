import { Itodo, TASK_STATUS } from "./types/todoTypes";
import { v4 as uuid } from 'uuid';

export const tasksExample: Itodo[] = [
    {
      id: uuid(),
      title: 'wash myself feet',
      description: 'soon to visit',
      status: TASK_STATUS.Open,
      creation_date: Date.now(),
      update_date: null

    },
    {
      id: uuid(),
      title: 'Walk the dog',
      description: '',
      status: TASK_STATUS.inProgress,
      creation_date: Date.now(),
      update_date: null
   
    },
    {
      id: uuid(),
      title: 'password pentagon',
      description: 'qwerty123455',
      status: TASK_STATUS.Open,
      creation_date: Date.now(),
      update_date: null

    },
    {
      id: uuid(),
      title: '!!!!!!!',
      description: 'Rick and Morty Season 6 Episode 3',
      status: TASK_STATUS.Done,
      creation_date: Date.now(),
      update_date: null

    },
    {
      id: uuid(),
      title: 'Make 4 lab',
      description: 'if I dont they will kill me',
      status: TASK_STATUS.inProgress,
      creation_date: Date.now(),
      update_date: null
   
    },
    {
      id: uuid(),
      title: 'Become like Billy',
      description: '7AM go to the gym',
      status: TASK_STATUS.Open,
      creation_date: Date.now(),
      update_date: null

    },

  ]