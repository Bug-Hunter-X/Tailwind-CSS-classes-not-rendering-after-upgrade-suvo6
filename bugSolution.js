```javascript
// bugSolution.js
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
```