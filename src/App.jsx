import { useState } from 'react';
import Nav from './components/Nav';
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
    <div className='bg-yellow-200'>
      <Nav />
      <Header user={current} onLogout={onLogout} onLogin={onLogin} />
      <h1>HELLO</h1>
      <Button primary={false} backgroundColor='pink' label='Sign In'>
        Sign In
      </Button>
    </div>
  );
}

export default App;
