import FeedbackItem from "./FeedbackItem"
import {motion,AnimatePresence} from 'framer-motion'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "./shared/Card"
function FeedbackList() {
    const {feedback,handleDelete} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <Card>
                <h2>No Feedback Here , Why Don't You Add One !</h2>
            </Card>
     }
  return (

   <div className="feedback-list">
    <AnimatePresence>
    {feedback.map(item=>{
        return(
        <motion.div 
         key={item.id}
         initial={{opacity:0,}}
         animate={{opacity:1}}
         exit={{opacity:0}}>    
            <FeedbackItem 
                key={item.id} 
                item={item}
                handleDelete={(id)=>handleDelete(id)}
            />
        </motion.div>    
        )
    })}
    </AnimatePresence>
   </div>
  )

}

export default FeedbackList