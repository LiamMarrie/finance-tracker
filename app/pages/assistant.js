import React, { useState } from 'react';

function AIAssistant() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{
        marginLeft: '40px'
    }}>
      <h1>AI Assistant</h1>
      <p>Our AI assistant offers personalized financial advice and insights</p>
      <p>Number of clicks: {count}</p>
      <button onClick={incrementCount}>Click me</button>
      <h1 style={{
        fontSize: '30px',
        color: 'red'
      }}>IGNORE THIS PLS AND THANKS</h1>
    </div>
  );
}

export default AIAssistant;
