import React from 'react'
// 👶 CHILD COMPONENT
export const Child = React.memo(({ onClick }) => {
    console.log("👶 Child rendered");
    return <button onClick={onClick}>Click Child</button>;
  });