import React from "react";

export default function Searchresult(props) {
  //   const img = `https://source.unsplash.com/400*300/?${props.name}`;
  const img = `https://unsplash.com/s/photos/1-1`;
  return (
    <div>
      <img src={img} alt="search" />
    </div>
  );
}
