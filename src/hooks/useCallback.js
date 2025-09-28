import React, { useState, useCallback } from "react";

import {Child} from './Child'

// 👨‍👩‍👧 PARENT COMPONENT
export default function App() {
  const [count, setCount] = useState(0);

  // ✅ useCallback memoizes this function
  const sayHello = useCallback(() => {
    console.log("Hello from child button");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {/* 👇 This is the CHILD COMPONENT */}
      <Child onClick={sayHello} />
    </div>
  );
}
