import React from 'react';

export default function Functionprop(props) {
  return (
    <div>
      <h1>function props</h1>
      <button onClick={props.data}>submit</button>
    </div>
  );
}
