import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About';
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {
return (
<FeedbackProvider>   
<BrowserRouter>
<Header/>
  <div className="container">
    <Routes>    
      <Route exact path='/' element={
        <>
        <FeedbackForm/>
        <FeedbackStatus/>
        <FeedbackList/>
        </>
      }>   
      </Route>
     
      <Route path='/about' element={<About/>}>  
      </Route>
    </Routes>
    <AboutIcon/> 
  </div>
</BrowserRouter>
</FeedbackProvider>    
  );
}

export default App;
