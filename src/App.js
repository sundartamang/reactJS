import { useMemo, useState } from 'react';

const calculate = () => {
  let result = 0;
  for (let i = 0; i < 10000; i++) {
    result += 10;
  }
  return result;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [dependentCount, setDependentCount] = useState(0);
  
  useMemo(calculate, [dependentCount]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment 1</button>
      <h5>Count : {count}</h5>

      <br />
      <button onClick={() => setDependentCount(dependentCount + 0)}>Increment 2</button>
      <h5>Dependent Count : {dependentCount}</h5>
    </div>
  );
};

export default App;


