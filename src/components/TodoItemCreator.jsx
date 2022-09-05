import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListAtom } from '../recoil/atom/todoAtom';
import uuid from 'react-uuid';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const [_, setTodoList] = useRecoilState(todoListAtom);

  const handleTask = e => {
    setInputValue(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();
    if (inputValue) {
      setTodoList(oldTodo => [
        ...oldTodo,
        {
          id: uuid(),
          text: inputValue,
          isComplete: false
        }
      ]);
      setInputValue('');
    }
  };

  return (
    <form
      className='w-2/3 flex flex-col bg-pink-200 rounded-md mt-12 items-center'
      onSubmit={addTask}
    >
      <input
        type='text'
        placeholder='Add here your task'
        onChange={handleTask}
        className='rounded-md m-4 p-2 w-[90%]'
        value={inputValue}
      />
      <button
        type='submit'
        className='w-40 px-6 py-3 bg-green-200 rounded-full mb-4 shadow-xl'
      >
        {' '}
        Add Task
      </button>
    </form>
  );
};

export default TodoItemCreator;
