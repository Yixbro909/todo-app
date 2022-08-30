import React from 'react'
import TodoCard from './TodoCard';

const TodoList:React.FC = () => {
  
  return (
    <div className='flex flex-col space-y-2 min-h-[40vh] overflow-auto mt-10 mb-20'>
       <TodoCard />
    </div>
  )
}

export default TodoList;