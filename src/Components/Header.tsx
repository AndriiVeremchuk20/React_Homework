import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { getDate } from "../secfn/getDate";
import { Filter } from "../store/action_types/filter";

export const Header: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [sort, setSort] = useState<string>();
  const { sortTasksCreate, setFilter, sortTasksUpdate, defaultOrder } = useActions();
  
  return (
    <header className="flex-col justify-around h-20 bg-sky-500 w-full">
      <div className="flex justify-around">
        <div className="text-4xl font-semibold my-4 cursor-pointer">
          SimpleTodo💫
        </div>
        <div className="hidden md:block mt-6 text-xl font-medium cursor-pointer">
          {getDate()}
        </div>
      </div>

      <div className="w-full flex justify-start bg-sky-400 py-3">
        <select
          value={sort}
          className="mx-2 rounded-sm"
          onChange={(e) => {
            switch (e.target.value) {
              case "update":
                sortTasksUpdate();
                break;

              case "create":
                sortTasksCreate();
                break;

              default:
                defaultOrder();
                break;
            }

            setSort(e.target.value);
          }}
        >
          <option className="hidden" value="">
            Sort
          </option>
          <option value="create">Create</option>
          <option value="update">Update</option>
        </select>
        <select
          className="mx-2 rounded-sm"
          onChange={(e) => {
            setStatus(e.target.value);

            if (e.target.value === "reset") {
              setFilter(null);
            } else {
              setFilter(e.target.value as Filter);
            }
          }}
          value={status}
        >
          <option value="" className="hidden">Filter</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button
          className="text-xl bg-inherit-400 px-5 py-1 rounded-sm border border-current mt-1 ml-2 hover:bg-indigo-700"
          onClick={() => {
            setStatus("");
            setSort("");
            setFilter(null);
            defaultOrder();
          }}
        >
          🔁
        </button>
      </div>
    </header>
  );
};
