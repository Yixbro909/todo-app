import React, {useState, useEffect} from 'react'
import {AddCircleOutlined} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addTodo } from '../../store/reducers/todoReducer';

const AddTodo:React.FC = () => {
   
  const [title, setTitle] = useState<string>('');
  const [id, setId] = useState<number>(0);

  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    const input = document.querySelector('input')!;
    input.value = ''
    input.focus()
    
    //add todo to Todo reducer
    dispatch(addTodo({
        title,
        id,
        created_at: new Date().toString()
    }))
  }

  useEffect(() => {
    if(todoList.length > 0){
      setId(todoList[0].id + 1)
    }
    
  }, [todoList])

  return (
    <div className='absolute bottom-0 w-[95%] mx-auto p-3'>
     <hr />
     <form className='flex w-full mt-3 rounded-lg bg-fuchsia-100 ' 
        onSubmit={handleSubmit}
     >
        <input type="text" className='w-[90%] rounded-md text-gray-700  transition-all p-2 outline-none bg-transparent border-none text-[15px] ' placeholder='Create your todo here ...' 
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)} 
        />
        <button className='outline-none p-4 text-fuchsia-500 hover:text-fuchsia-600 transition-all font-extrabold' type="submit" onSubmit={handleSubmit}><AddCircleOutlined fontSize={'large'}/></button>
     </form>
    </div>
  )
}

export default AddTodo
