import React from 'react'
import './WorkcardStyle.css';
import Workcard from './Workcard';
import WorkCardData from './WorkCardData'
import pro1 from "../asserts/2.jpeg";
const Work = () => {
  return (
    <div className='work-container'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>

    {WorkCardData.map((val, ind)=>{
        return(
            <Workcard
            key ={ind}
            imgsrc = {val.imgsrc}
            title = {val.title}
            text = {val.text}
            view = {val.view}
            source = {val.source}
            />
        )
    })}
      
    </div>
  </div>
  )
}

export default Work
