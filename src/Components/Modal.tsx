import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

export const Modal: React.FC = () => {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const {addTask, hideModal} = useActions();

    return (
        <div className='fixed w-full h-full flex justify-center z-10 bg-emerald-500/25'>
            <div className='flex flex-col w-full md:w-1/3 mt-40 h-1/3 bg-blue-200 mx-5 p-2 border-2 border-indigo-600 rounded'>
                <div className='text-xl font-bold'>
                    Task</div>
                <hr />
                <div className='flex flex-col'>
                    <input
                        type="text"
                        autoFocus
                        className='m-2 outline-none p-1 rounded'
                        placeholder='Title..'
                        maxLength={25}
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <textarea
                        placeholder='Description...'
                        className='m-2 p-1 resize-none outline-none rounded'
                        rows={5}
                        maxLength={60}
                        value={description}
                        onChange={
                            (e) => {
                                setDescription(e.target.value);
                            }
                        }
                    />
                </div>
                <div className='flex justify-around mt-5'>
                    <button
                        className='bg-indigo-800 text-white w-1/4 p-1 rounded hover:bg-slate-400'
                        onClick={hideModal}
                    >
                        Сancel
                    </button>
                    <button
                        className='bg-indigo-700 text-white w-1/4 p-1 rounded hover:bg-slate-500'
                        onClick={
                            () => {
                                setTitle('');
                                setDescription('');                                
                            }
                        }
                    >
                        Reset
                    </button>
                    <button
                        className='bg-indigo-600 text-white w-1/4 p-1 rounded hover:bg-slate-600'

                        onClick={() => {
                            if(title||description)
                            {
                                addTask({title, description});                                
                                hideModal();
                            }
                             else
                               alert('empty fields')
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
