import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import About from './pages/About';
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import AboutIcon from './components/AboutIcon';


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
<BrowserRouter>
     
<Header/>
  <div className="container">
    <Routes>    
      <Route exact path='/' element={
        <>
        <FeedbackForm handleAdd = {handleAdd}/>
        <FeedbackStatus feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
        </>
      }>   
      </Route>
     
      <Route path='/about' element={<About/>}>  
      </Route>
    </Routes>
    <AboutIcon/> 
  </div>
</BrowserRouter>
    
  );
}

export default App;
