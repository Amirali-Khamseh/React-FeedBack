import {createContext,useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] =  useState([
        {
            id:1,
            text: 'added from context',
            rating: 10
        },
    ]);
const handleAdd =(newFeedback)=>{
        newFeedback.id = uuidv4();
        setFeedback(prevFeedbacks => ([...prevFeedbacks,newFeedback]));
      }
      
const handleDelete =(id)=>{
    if(window.confirm('Do you want this item to be delted ?')){
      setFeedback(feedback.filter(feedback=>feedback.id!== id))
    }else{
      return;
    } 
  }
    return <FeedbackContext.Provider value={{feedback,handleDelete,handleAdd}}>
                {children}
            </FeedbackContext.Provider>
}
export default FeedbackContext;