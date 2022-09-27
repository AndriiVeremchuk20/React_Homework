import React from 'react'
import { useActions } from '../hooks/useActions'

export const AddButton: React.FC = () => {

  const {showModal} = useActions()

  return (
    <div className='fixed bottom-0 w-full flex justify-center'>
        <button 
          className='block text-white text-4xl mb-5 w-14 h-14 bg-sky-500 border-2 text-blue-0 border-blue-900 rounded-full hover:bg-blue-700'
          onClick={showModal}  
        >
            +
        </button>
    </div>
  )
}
