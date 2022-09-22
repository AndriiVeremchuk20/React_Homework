import React from 'react'
import { Itodo, TASK_STATUS } from '../Interfaces/Itodo'
import { getDate } from '../secfn/getDate';
import { getStatus } from '../secfn/getStatus';

interface TodoCardProps {
    task: Itodo;
    onRemove: (id: string) => void;
    onEdit: (edited: Itodo) => void;
    onSetStatus: (id: string, newStatus: TASK_STATUS) => void;
}

export const TodoCard: React.FC<TodoCardProps> = ({ 
    task, 
    onRemove, 
    onEdit, 
    onSetStatus
}) => {
    return (
        <div className='md:w-1/4 w-full m-1 p-3 bg-white rounded-lg border border-gray-200 shadow-md'>
            <div className="px-1 py-4">
                <div className='mb-2 text-2xl font-bold tracking-tight text-gray-900 h-12'>
                    
                     <select
                        className='bg-inherit'
                        value={getStatus(task.status).emoji}
                        onChange={(e)=>{
                            onSetStatus(task.id , Number(e.target.value))
                        }}
                    >
                        <option 
                            className='hidden' 
                            value={''}
                        >
                            {getStatus(task.status).emoji}
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


                    {task.title}
                </div>
                <div className='mb-3 h-16 font-normal text-gray-700 mt-5 text-left'>{task.description}</div>

                <div className='w-full inline-flex justify-around px-6 pt-4 pb-2'>
                    <div className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2'>
                        <div>
                            Create:
                        </div>
                        <div>
                            {getDate(task.creation_date)}</div>
                    </div>
                    <div className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2'>
                        <div>
                            Update:
                        </div>
                        <div>
                            {getDate(task.update_date)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full inline-flex justify-center'>
                <button
                    className='text-xl bg-blue-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
                    onClick={() => {
                        onEdit(task)
                    }}
                >
                    ✏️
                </button>

                <button
                    className='text-xl bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'
                    onClick={() => {
                        onRemove(task.id)
                    }}
                >
                    ❌
                </button>
            </div>
        </div>
    )
}
