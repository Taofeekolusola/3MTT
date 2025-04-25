import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{ count }</h2>
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <button onClick={() => setCount(count - 1)}>DELETE</button>
    </div>
  );
}

export default App;
