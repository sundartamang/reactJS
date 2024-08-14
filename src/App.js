import './App.css';
import { useCallback, useState } from 'react';

function callBackFunction() {
  return "Hello world";
}

function App() {
  const [count, setCount] = useState(0);
  const [depentDcount, setDependenCount] = useState(100);

  const callBackFn = useCallback(callBackFunction, [count]);
  console.log("callBackFn =>", callBackFn());

  return (
    <div className="App">
      <p>Normal count : {count}</p>
      <button onClick={() => setCount(count+1)}>Increment 1</button>

      <p>Dependent count : {depentDcount}</p>
      <button onClick={() => setDependenCount(depentDcount + 1)}>Increment 2</button>
    </div>
  );
}

export default App;

/***
Dependency Array and Re-renders:
If the dependency array is empty ([]), the useCallback hook will create a memoized function that does not change between renders, 
regardless of any state changes. If you include count in the dependency array, callBackFn will be re-created whenever count changes. 
Since callBackFunction does not change, callBackFn will only update when count changes.


Behavior on State Changes:
Increment 1: Clicking "Increment 1" will change the count state, causing useCallback to re-create callBackFn. This will result in a new memoized 
instance of callBackFn with the updated count.
Increment 2: Clicking "Increment 2" changes the depentDcount state. Since callBackFn is dependent only on count, depentDcount changes will not 
affect callBackFn. Therefore, callBackFn will retain its previous memoized instance.
 ***/
