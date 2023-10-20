import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {
  const[feedback,setFeedback]=useState(feedbackData);
  const handleDelete =(id)=>{
    if(window.confirm('Do you want this item to be delted ?')){
      setFeedback(feedback.filter(feedback=>feedback.id!== id))
    }else{
      return;
    }
    
  }
  const handleAdd =(newFeedback)=>{
    newFeedback.id = uuidv4();
    setFeedback(prevFeedbacks => ([...prevFeedbacks,newFeedback]));
  }
  return (
    <>
      <Header/>
      <div className="container">
      <FeedbackForm handleAdd = {handleAdd}/>
      <FeedbackStatus feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
      </div>
     
    </>
    
  );
}

export default App;
