import React, { useEffect, useState } from "react";

export default function One() {
  const [num, setnum] = useState(0);
  const [nums, setnums] = useState(0);
  useEffect(() => {
    // alert("I am click  ");
    document.title = `you click me ${num} times`;
  }, [num]);

  return (
    <div>
      <button onClick={() => setnum(num + 1)}>click me {num}</button>
      <br />
      <button onClick={() => setnums(nums + 1)}>click me {nums}</button>
    </div>
  );
}
