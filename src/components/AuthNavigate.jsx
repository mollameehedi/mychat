import React from 'react'
import { Link } from 'react-router-dom'

const AuthNavigate = ({text,linktext,link,stlye}) => {
  return (
    <p className={stlye}>
        {text} 
        <Link to={link}> {linktext}</Link>
        
    </p>
  )
}

export default AuthNavigate