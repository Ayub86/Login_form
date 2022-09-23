import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate=useNavigate();
  return (
   
    <div>
      <h3>Contact Page</h3>
      <button className='btn btn-secondary btn-lg' onClick={navigate('/')}>Navigation Button</button>
    </div>
  )
}

export default Contact
