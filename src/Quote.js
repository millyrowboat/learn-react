import React from 'react';

export default ({text, votes}) => (
  <li style={{border: "1px solid grey", margin: "10px", padding: "10px"}}>
    <div>{text}</div>
    <div>{votes}</div>

    <div>
      <button>+1</button>
      <button>-1</button>
    </div>
  </li>
)
