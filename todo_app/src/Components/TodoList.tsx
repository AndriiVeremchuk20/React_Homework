import React from 'react'
import { Itodo, TASK_STATUS } from '../Interfaces/Itodo'
import { TodoCard } from './TodoCard';

interface TodoListProps{
  todoList: Itodo[];
  onRemove: (id: string) => void;
  onEdit: (edited: Itodo) => void;
  onSetStatus: (id: string, newStatus: TASK_STATUS) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todoList, 
  onRemove, 
  onEdit, 
  onSetStatus
}) => {
  return (
    <div className='w-full flex flex-wrap justify-center mt-20 mb-20'>
      {
        todoList.map((task)=>
        <TodoCard
          onSetStatus={onSetStatus}
          key={task.id}
          task={task}
          onRemove={onRemove}
          onEdit = {onEdit}
        />
        )
      }
    </div>
  )
}
