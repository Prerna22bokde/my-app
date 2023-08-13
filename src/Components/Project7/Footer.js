import React from "react";
import "./My.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer  ">
        <p> Copyright © {year}</p>
      </footer>
    </>
  );
}
