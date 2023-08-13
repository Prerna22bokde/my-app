import React from 'react';
import './Netflix.css'

export default function Card(props) {
    console.log(props);
  return (
    <>
 <div className='cards'>
<div className='card'>
    <img src={props.imgsrc}  alt='myPic' className='card_img'/>
    <div className='card_info'>
        <span className='card__category'>{props.title}</span>
        <h3 className='card__title'>{props.sname}</h3>
        <a href=' ' target='_blank'>
            <button>Watch Now</button>
        </a>
    </div>
</div>
 </div>
 </>
  );
}
