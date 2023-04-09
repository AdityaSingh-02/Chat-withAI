import React from 'react'
import "./ErrorStyles.css"
import error_img from "../assets/error-img.avif"
const ErrorPage = () => {
  return (
    <div className="Hero-container">
    <div className="Error-container">
    <div className="Main-heading">Sorry</div>
        <div className="Main-description">Page not found</div>
            <div className="Error-img">
                <img src={error_img} className="error-img"/>
            </div>
        </div>  
        </div>    
  )
}

export default ErrorPage
