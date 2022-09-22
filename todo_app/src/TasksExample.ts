import { Itodo, TASK_STATUS } from "./Interfaces/Itodo"
const { v4: uuidv4 } = require('uuid');

export const tasks: Itodo[] = [
    {
      id: uuidv4(),
      title: 'wash myself feet',
      description: 'soon to visit',
      status: TASK_STATUS.Open,
      creation_date: Date.now(),
      update_date: null

    },
    {
      id: uuidv4(),
      title: 'Walk the dog',
      description: '',
      status: TASK_STATUS.inProgress,
      creation_date: Date.now(),
      update_date: null
   
    },
    {
      id: uuidv4(),
      title: 'password pentagon',
      description: 'qwerty123455',
      status: TASK_STATUS.Open,
      creation_date: Date.now(),
      update_date: null

    },
    {
      id: uuidv4(),
      title: '!!!!!!!',
      description: 'Rick and Morty Season 6 Episode 3',
      status: TASK_STATUS.Done,
      creation_date: Date.now(),
      update_date: null

    },
    {
      id: uuidv4(),
      title: 'Make 4 lab',
      description: 'if I dont they will kill me',
      status: TASK_STATUS.inProgress,
      creation_date: Date.now(),
      update_date: null
   
    },
    {
      id: uuidv4(),
      title: 'Become like Billy',
      description: '7AM go to the gym',
      status: TASK_STATUS.Open,
      creation_date: Date.now(),
      update_date: null

    },

  ]