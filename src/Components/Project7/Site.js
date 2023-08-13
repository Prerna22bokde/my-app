import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";

// notepad site

export default function Site() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("click");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const deleteItems = (id) => {
    console.log("delete");
    setAddItem((oldItems) => {
      return oldItems.filter((arrElem, Index) => {
        return Index !== id;
        // esme return ro vo jo index se id match na hori ho vo items return kro mtlb koiek delete
      });
    });
  };

  return (
    <div>
      <Header />
      <Createnote passNote={addNote} />
      {/* <Note /> */}
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onSelect={deleteItems}
          />
        );
      })}
      <Footer />
    </div>
  );
}
