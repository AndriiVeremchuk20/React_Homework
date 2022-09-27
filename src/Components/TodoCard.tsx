import React, { useState } from 'react'
import { Itodo, TASK_STATUS } from '../types/todoTypes'
import { getDate } from '../secfn/getDate';
import { getStatus } from '../secfn/getStatus';
import { useActions } from '../hooks/useActions';

interface TodoCardProps {
    task: Itodo;
}

export const TodoCard: React.FC<TodoCardProps> = ({
    task
}) => {

    const { removeTask, changeTaskStatus, editTask} = useActions();

    const [title, setTitle] = useState<string>(task.title);
    const [description, setDescription] = useState<string>(task.description);
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <div className='md:w-1/4  w-5/6 m-1 p-3 bg-white rounded-lg border border-gray-200 shadow-xl'>
            <div className="px-1 py-4">
                <div className='flex flex-row  mb-1 text-xl font-bold tracking-tight text-gray-900 h-auto'>
                    <select
                        className='bg-inherit'
                        value={getStatus(task.status).emoji}
                        onChange={(e) => {
                            changeTaskStatus(task.id, Number(e.target.value))
                        }}
                    >
                        <option
                            className='hidden'
                        >
                            {
                                getStatus(task.status).emoji
                            }
                        </option>

                        <>{
                            Object.values(TASK_STATUS).filter((v => !isNaN(Number(v)))).map((v, index) =>
                                Number(v) !== task.status &&
                                <option
                                    key={index}
                                    value={Number(v)}
                                >
                                    {getStatus(Number(v)).emoji}
                                </option>
                            )
                        }
                        </>
                    </select>

                    <textarea
                        className= {`bg-none resize-none px-2 w-5/6 ${editMode?'border-2 border-green-500 rounded-sm':''}`}
                        value={title}
                        disabled={!editMode}
                        maxLength = {25}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />

                </div>
                <textarea
                    className= {`w-full self-center px-3 resize-none mb-3 h-16 font-normal text-gray-700 mt-5 text-left ${editMode?'border-2 border-green-500 rounded-sm':''}`}
                    value={description}
                    disabled={!editMode}
                    readOnly={!editMode}
                    rows={6}
                    maxLength={60}
                    onChange={(e) => { setDescription(e.target.value) }}
                />

                <div className='w-full inline-flex justify-around px-6 pt-4 pb-2'>
                    <div className='inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2'>
                        <div>
                            Create:
                        </div>
                        <div>
                            {
                                getDate(task.creation_date)
                            }</div>
                    </div>
                    <div className='inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2'>
                        <div>
                            Update:
                        </div>
                        <div>
                            {
                                getDate(task.update_date)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full inline-flex justify-center'>
                <button
                    className='text-xl bg-blue-700 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
                    onClick={() => {
                        setEditMode(!editMode);
                    }}
                >
                    ✏️
                </button>

                {editMode ?
                    <>
                        <button
                            className='text-xl bg-blue-600 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4'
                            onClick={()=>{
                                setTitle(task.title);
                                setDescription(task.description);
                            }}
                        >
                            🔁
                        
                        </button>

                        <button
                            className='text-xl bg-blue-500 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 '
                        
                            onClick={
                                ()=>{
                                    if(title||description){
                                        editTask(task.id, {title, description});
                                        setEditMode(!editMode);
                                    }
                                    else{
                                        alert('Empty field')
                                    }

                                }
                            }

                        >
                            ✅
                        </button>
                    </>

                    : null
                }
                <button
                    className='text-xl bg-blue-400 hover:bg-gray-800 text-gray-800 font-bold py-2 px-4 rounded-r'
                    onClick={() => {
                        editMode?
                        setEditMode(!editMode):
                        removeTask(task.id);        
                    }}
                >
                    ❌
                </button>
            </div>
        </div>
    )
}
