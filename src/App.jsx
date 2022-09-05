import { useState } from 'react';
import Nav from './components/Nav';
import TodoDisplayer from './components/TodoDisplayer';
import TodoItemCreator from './components/TodoItemCreator';
import { Button } from './stories/Button';
import { Header } from './stories/Header';

function App() {
  const [current, setCurrent] = useState('Gabriele');

  const onLogout = () => {
    setCurrent('');
  };
  const onLogin = () => {
    setCurrent('Gabriele');
  };

  return (
    <div className='bg-yellow-200 h-screen'>
      <Nav />

      <section className='flex flex-col lg:flex-row justify-center items-center lg:gap-8 lg:px-8 lg:items-start'>
        <TodoItemCreator />
        <TodoDisplayer />
      </section>
    </div>
  );
}

export default App;
