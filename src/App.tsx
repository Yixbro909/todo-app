import React from 'react';
import './App.css';

//component
import TodoList from './components/TodoList';
import AddTodo from './components/form/AddTodo';

function App() {

  return (
    <div className='w-98 md:w-8/12 lg:w-1/2 transition-all relative bg-white rounded-md shadow-md p-5 mx-auto my-auto min-h-[70vh]  mt-20'>
      {/* HEADER */}
      <div className='font-extrabold  text-fuchsia-500 text-2xl uppercase tracking-wide mb-4' >todolist</div>

      {/* TODO LIST */}

      <TodoList />

      {/* BOTTOM */}
      <AddTodo />
    </div>
  );
}

export default App;
