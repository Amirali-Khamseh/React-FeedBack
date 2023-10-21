import React, { useState ,useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import Rating from './Rating';
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

export default function FeedbackForm() {
  const {feedback,handleAdd,handleEdit,feedBackEdit,updateFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(()=>{
    if(feedBackEdit.edit){
      setBtnDisabled(false);
      setText(feedBackEdit.item.text);
      setRating(feedBackEdit.item.rating);
    }
  },[feedBackEdit])

  const handleTextChange = (e)=>{
    if(text===''){
      setBtnDisabled(true);
      setMessage(null);
    }else if(text !== '' && text.trim().length <=10){
      setBtnDisabled(true);
      setMessage('Enter minimum 10 characters');
    }else{
      setMessage(null)
      setBtnDisabled(false);
    }
    setText(e.target.value)
  } 
  const formSubmit = (e)=>{
    e.preventDefault();
    if(text.trim().length >10){
      const newFeedback = {
        text ,
        rating
      }
      if(feedBackEdit.edit){
        updateFeedback(feedBackEdit.item.id,newFeedback)
      }else{
        handleAdd(newFeedback);
      }
     
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={formSubmit}>
        <h2>How do you like this app so far ?🤞 </h2>
       <Rating select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder='Feedback goes here'
            onChange={handleTextChange}
            value={text} />
          <Button
            type='submit'
            version='secondary'
            isDisabled={btnDisabled}
          >Send
          </Button>
        </div>
      </form>

      {message && <div className='message'>{message}</div>}
    </Card>
  )
}
