import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

export default function Netflix() {
  // return (
  //   <div>
  //     <Card
  //       key={Sdata[1].id}
  //       imgsrc={Sdata[1].imgsrc}
  //       title={Sdata[1].title}
  //       sname={Sdata[1].sname}
  //     />
  //   </div>
  // );

  {
    Sdata.map(function ncard(val) {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
        />
      );
    });
  }
}
