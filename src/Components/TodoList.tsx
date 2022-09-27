import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Itodo, TASK_STATUS } from "../types/todoTypes";
import { TodoCard } from "./TodoCard";

export const TodoList: React.FC = () => {
  const todoList = useTypedSelector((state) =>
    state.todo.filter((todoItem) => {
      if (state.filter === "open") {
        return todoItem.status === TASK_STATUS.Open;
      } else if (state.filter === "in-progress") {
        return todoItem.status === TASK_STATUS.inProgress;
      } else if (state.filter === "done") {
        return todoItem.status === TASK_STATUS.Done;
      } else {
        return true;
      }
    })
  );

  return (
    <div className="w-full flex flex-wrap justify-center my-20">
      {todoList.map((item: Itodo) => (
        <TodoCard key={item.id} task={item} />
      ))}
    </div>
  );
};
