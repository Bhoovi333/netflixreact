import React from 'react'
import ReactDOM from 'react-dom'
import Card from "./card"
import Sdata from './sdata';


function ncard(val){
    return(
        <Card imgsrc={val.imgsrc} title={val.title} link={val.link} />
    )
}


ReactDOM.render(
 <>
//1st......
//<Card imgsrc=""direct link title="direct title" link="direct" />
//2nd usind Sdata...........as api,,,,,,
 //<Card imgsrc={Sdata[0].imgsrc} title={Sdata[0].title} link={Sdata[0].link} />
  //<Card imgsrc={Sdata[1].imgsrc} title={Sdata[1].title} link={Sdata[1].link} />
  //<Card imgsrc={Sdata[2].imgsrc} title={Sdata[2].title} link={Sdata[2].link} /> 
  //.............................
   

   
3rd.........{Sdata.map(function ncard(val){
    return(
        <Card imgsrc={val.imgsrc} title={val.title} link={val.link} />
    )
})}



........or we can do separately..........function ncard before render.......
and then map.................

{Sdata.map(ncard)}
  

 </>,
 document.getElementById('root')
);