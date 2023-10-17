import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import { useState } from 'react';


function App() {
  const[feedback,setFeedback]=useState(feedbackData);
  const handleDelete =(id)=>{
    if(window.confirm('Do you want this item to be delted ?')){
      setFeedback(feedback.filter(feedback=>feedback.id!== id))
    }else{
      return;
    }
    
  }
  return (
    <>
      <div className="App">
      </div>
      <Header/>
      <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
    </>
    
  );
}

export default App;
