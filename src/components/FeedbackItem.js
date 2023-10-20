import {FaTimes} from 'react-icons/fa' 
import Card from './shared/Card'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


export default function FeedbackItem({item}) {
  const {feedback,handleDelete} = useContext(FeedbackContext)

  return (
    <Card>
       <div className="num-display">{item.rating}</div>
       <button className='close' onClick={()=>handleDelete(item.id)}>
        <FaTimes color='red'/>
       </button>
       <div className="text-display">{item.text}</div>
    </Card>
  )
}

