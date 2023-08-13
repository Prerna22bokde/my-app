import React from 'react';
import Card from './Card'
import Sdata from './Sdata';

export default function Amezone() {
  return (
    <div>
        <Card 
  key={Sdata[6].id}
  imgsrc={Sdata[6].imgsrc}
  title={Sdata[6].title}
  sname= {Sdata[6].sname}/>
    </div>
  );
}
