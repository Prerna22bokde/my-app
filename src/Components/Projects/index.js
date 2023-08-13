import React from 'react';
// import Card from './Card';
// import Sdata from './Sdata';
import Netflix from './Netflix';
import Amezone from './Amezone';

export default function Index() {
  const favSeries = "amezone";
//   function Fav(){
//     if(favSeries==="amezone"){
// return <Netflix/>
//     }else{
// return <Amezone/>
//     }
//   }
 
  return (
 <>
 <h1 className='heading_style'>List of top 5 Netflix Series in 2020</h1>
 {/* <Card imgsrc={Sdata[0].imgsrc}
title={Sdata[0].title}
sname= {Sdata[0].sname}/>

<Card imgsrc={Sdata[1].imgsrc}
title={Sdata[1].title}
sname= {Sdata[1].sname}/>

 <Card imgsrc={Sdata[2].imgsrc}
title={Sdata[2].title}
sname= {Sdata[2].sname}/>

 <Card imgsrc={Sdata[3].imgsrc}
title={Sdata[3].title}
sname= {Sdata[3].sname}/>

 <Card imgsrc={Sdata[4].imgsrc}
title={Sdata[4].title}
sname= {Sdata[4].sname}/> */}


{/* multiple card ke liye mapping use hota hai  */}
{/* {Sdata.map( function ncard(val){
return (
  <Card 
  key={val.id}
  imgsrc={val.imgsrc}
  title={val.title}
  sname= {val.sname}/>
  
)
  })}; */}
  

  {(favSeries==="netflix")?<Netflix/>:<Amezone/>}
</>
  );
}
