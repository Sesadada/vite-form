import { useRecoilState } from 'recoil';
import { todoListAtom } from '../recoil/atom/todoAtom';
import { PropTypes } from 'prop-types';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className='flex justify-around p-4 m-2 shadow-lg rounded-md bg-blue-300'>
      <input
        type='text'
        value={item.text}
        onChange={editItemText}
        className='rounded-md px-2'
      />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

TodoItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default TodoItem;
