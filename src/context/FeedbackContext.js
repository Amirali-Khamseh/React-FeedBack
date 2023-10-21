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
        {
            id:2,
            text: 'added from context 2',
            rating: 4
        },
        {
            id:3,
            text: 'added from context 3',
            rating: 2
        },
    ]);
const [feedBackEdit , setFeedBackEdit]=  useState({
      item:{},
      edit:false,
})
const updateFeedback = (id , updatedItem)=>{
 setFeedback(feedback.map(item=>(item.id=== id ? 
  {...item,...updatedItem}:item)))
console.log(id,updatedItem)
}

const handleEdit = (item)=>{
  setFeedBackEdit({
    item,
    edit:true,
  })
}

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
    return <FeedbackContext.Provider
value={{feedback,
    handleDelete,
    handleAdd,handleEdit,
    feedBackEdit,
    updateFeedback}}>
                {children}
            </FeedbackContext.Provider>
}
export default FeedbackContext;