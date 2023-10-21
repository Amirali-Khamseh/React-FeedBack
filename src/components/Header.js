import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to='/' style={{textDecoration:'none' ,color:'#ff6a95'}}>
          <h2>Feedback system</h2>
        </Link>
      </div>
    </header>
  )
}
