import React, { useState } from 'react'
import { IbaseTodo, Itodo } from '../Interfaces/Itodo';

interface ModalProps {
    handleSave: (newTask: IbaseTodo)=>void;
    handleEdit: (task: Itodo, edited: IbaseTodo)=>void;
    handleHide: ()=>void;
    task: Itodo|null;
}


export const Modal: React.FC<ModalProps> = ({
    handleSave, 
    handleHide, 
    handleEdit, 
    task
}) => {

    const [title, setTitle] = useState<string>(task?task.title:'');
    const [description, setDescription] = useState<string>(task?task.description:'');

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
                        onChange={(e)=>{
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
                            (e)=>{
                                setDescription(e.target.value);
                            }
                        }                        
                    />
                </div>
                <div className='flex justify-around mt-5'>
                    <button
                        className='bg-indigo-800 text-white w-1/4 p-1 rounded hover:bg-slate-400' 
                        onClick={handleHide}
                    >
                        Сancel
                    </button>
                    <button 
                        className='bg-indigo-700 text-white w-1/4 p-1 rounded hover:bg-slate-500'
                        onClick={
                            ()=>{
                                setTitle(task?task.title:'');
                                setDescription(task?task.description:'');                                
                            }
                        }
                    >
                        Reset
                    </button>
                    <button
                        className='bg-indigo-600 text-white w-1/4 p-1 rounded hover:bg-slate-600'
            
                        onClick={()=>{
                            console.log(task)
                            if(title||description)
                                task? handleEdit(task, {title: title, description:description}):handleSave({title, description});
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
