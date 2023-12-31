import React, { useEffect, useState } from 'react'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
  
export default function Rating({select}) {
  const {feedBackEdit} = useContext(FeedbackContext);
  const[selected,setSelected]=useState(10);
  useEffect(()=>{
    setSelected(feedBackEdit.item.rating);
  },[feedBackEdit])

  const handleChange =(e)=>{
    setSelected(+e.target.value)
    select(+e.target.value)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}
