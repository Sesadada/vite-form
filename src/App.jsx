import { Button } from './stories/Button';

function App() {
  return (
    <div className='bg-yellow-200'>
      <h1>HELLO</h1>
      <Button
        primary={false}
        backgroundColor='pink'
        size='medium'
        label='Sign In'
      >
        Sign In
      </Button>
    </div>
  );
}

export default App;
