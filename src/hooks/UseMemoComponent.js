import React, { useState, useMemo } from "react";

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 💡 Expensive calculation memoized with useMemo
  const expensiveResult = useMemo(() => {
    console.log("🧮 Calculating expensive result...");
    return count * 5000;
  }, [count]); // ✅ Only re-calculates when `count` changes

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Demo</h2>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Expensive Result: {expensiveResult}</p>
      </div>

      <hr />

      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Typed Text: {text}</p>
      </div>
    </div>
  );
};

export default UseMemoComponent;
