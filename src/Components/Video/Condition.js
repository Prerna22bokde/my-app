import React, { useState } from 'react';

export default function Condition() {
    const [loggedIn,setLoggedIn]=useState(1);
  return (
    <div>
      {loggedIn ===1?<h1>welcome everyone</h1>:
      loggedIn ===2?<h1>welcome guys</h1>:<h1>welcome guys</h1>}
    </div>
  );
}
