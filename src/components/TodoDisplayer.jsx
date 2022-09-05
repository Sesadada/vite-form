import { useRecoilState } from 'recoil';
import { todoListAtom } from '../recoil/atom/todoAtom';
import TodoItem from './TodoItem';

const TodoDisplayer = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  console.log(todoList);
  return (
    <div className='bg-blue-200 w-2/3 mt-8 lg:mt-12 shadow-md rounded-md flex flex-col  p-2'>
      {todoList.length > 0 &&
        todoList.map((todo, i) => <TodoItem key={i} item={todo} />)}
    </div>
  );
};

export default TodoDisplayer;
