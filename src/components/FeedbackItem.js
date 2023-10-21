import {FaTimes,FaEdit} from 'react-icons/fa' 
import Card from './shared/Card'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


export default function FeedbackItem({item}) {
  const {feedback,handleDelete,handleEdit} = useContext(FeedbackContext)

  return (
    <Card>
       <div className="num-display">{item.rating}</div>
       <button className='close' onClick={()=>handleDelete(item.id)}>
        <FaTimes color='red'/>
       </button>
       <button className='edit' onClick={()=>handleEdit(item)}>
        <FaEdit color='gray'/>
       </button>
       <div className="text-display">{item.text}</div>
    </Card>
  )
}

