import React, { useState } from 'react';
import { getDate } from '../secfn/getDate';

interface HeaderProps {
    onSetTextFilter: (filter: string) => void;
    onSetOrder: (field: string) => void;
    onSetStatusFilter: (filter: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
    onSetTextFilter, 
    onSetOrder, 
    onSetStatusFilter
}) => {

    const [input, setInput] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [date, setDate] = useState<string>('');

    return (
        <header className=' flex-col justify-around h-20 bg-sky-500 w-full'>
            <div className='flex justify-around'>
                <div className='hidden md:block text-2xl font-semibold mt-6 cursor-pointer'>
                    SimpleTodo💫
                </div>
                <div className='mt-4 flex flex-row mb-5 md:w-1/3'>
                    <label htmlFor='search' className='bg-gray-300 text-xl p-2 rounded-l-md'>
                        🔎
                    </label>
                    <input
                        className='p-2 text-xl outline-none rounded-r-xl'
                        id='search'
                        type={'text'}
                        placeholder='Search...'
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            onSetTextFilter(e.target.value)
                        }}
                    />
                </div>
                <div className='hidden md:block mt-6 text-xl font-medium cursor-pointer'>
                    {getDate()}
                </div>
            </div>

            <div className='w-full flex justify-start bg-sky-400 py-3'>
                <select
                    className='mx-2 rounded-sm'
                    onChange={(e) => {
                        onSetOrder(e.target.value)
                        setDate(e.target.value);
                    }}
                    value={date}
                    
                >
                    <option className='hidden' value="">Sort</option>
                    <option value="status">Status</option>
                    <option value="create">Create</option>
                    <option value="update">Update</option>
                </select>
                <select
                    className='mx-2 rounded-sm'
                    onChange={(e) => {
                        onSetStatusFilter(e.target.value);
                        setStatus(e.target.value);
                    }}
                    value={status}
                    
                >
                    <option value="" className='hidden'>Filter</option>
                    <option value="open">Open</option>
                    <option value="progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button
                
                    className='text-xl bg-inherit-400 px-5 py-1 rounded-sm border border-current mt-1 ml-2 hover:bg-indigo-700'

                    onClick={()=>{
                        setInput('');
                        onSetOrder('');
                        onSetStatusFilter('');
                        onSetTextFilter('');
                        setDate('');
                        setStatus('');
                    }}
                >
                    🔁
                </button>
            </div>

        </header>

    )
}
