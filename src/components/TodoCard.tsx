import React, {useState, useEffect} from 'react'

import { DeleteRounded, ExpandMoreRounded, ExpandLessRounded } from '@mui/icons-material';
import {formatDistance} from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeTodo } from '../store/reducers/todoReducer';
const TodoCard = () => {
  
  const [limit, setLimit] = useState<number>(4);

  const todoList = useSelector((state: RootState) => state.todo)
   
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTodo({id}))
  }

  const seeMore = () => setLimit(todoList.length);

  const seeLess = () => setLimit(4)
  
  useEffect(() => {
     if(limit > 4){
      seeMore();
     }
  }, [todoList])
    
  return (
    <>
      {todoList.length > 0 && todoList.slice(0, limit).map((todo) => {
        return (
           <div className='flex px-2 py-1 justify-between odd:bg-fuchsia-100 even:bg-slate-100  rounded-md' key={todo.id}>
              <div className='flex flex-col'>
                <div className='basis-[90%] tracking-wide first-letter:uppercase  text-gray-700'>{todo.title}</div>
                <div className="text-[12px] mt-2 text-gray-400 thin">
                   -{formatDistance(new Date(todo.created_at), new Date())}
                </div>
              </div>
              <button className='basis-[10%] rounded-full text-gray-400 hover:text-gray-500' onClick={() => handleDelete(todo.id)}>
                  <DeleteRounded  />
              </button>
          </div>  
        )
      })}
      {todoList.length < 1 && <div className='mt-10 text-[15px] tracking-wider text-gray-400 text-center'>Todolist empty...</div>}
      {/* SEE MORE */}
      {
        todoList.length > 4 && limit === 4 ? 
        <button className='px-3 w-32 self-center font-bold rounded-md py-2 text-gray-500 text-[14px]' onClick={seeMore}>
          see more <span><ExpandMoreRounded /></span>
        </button>

        : limit > 4 ?

        <button className='px-3 w-32 self-center font-bold rounded-md py-2 text-gray-500 text-[14px]' onClick={seeLess}>
        see less <span><ExpandLessRounded /></span>
       </button>

       :

       ''
      }

      {/* SEE LESS */}
    </>
  )
}

export default TodoCard
