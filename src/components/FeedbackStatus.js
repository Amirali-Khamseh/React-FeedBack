import React from 'react'
import PropTypes from 'prop-types'
export default function FeedbackStatus({feedback}) {
    let avg = feedback.reduce((acc,curr)=>{
        return acc +curr.rating;
    },0)/feedback.length;
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(avg)? 0 :avg.toFixed(1).replace(/[.,]0$/,'')}</h4>
    </div>
  )
}
 FeedbackStatus.propTypes = {
    feedback:PropTypes.array.isRequired,
 }
