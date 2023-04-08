import React, { useEffect, useState } from 'react'
import "./HeroimgStyles2.css"
import send from "../assets/send.png"
import img from "../assets/login-background.jpg"
import axios from 'axios'

const Heroimg2 = () => {

  const[ques , setQues] = useState({query:""});
  const[data , setData] = useState('');
  const [displayQeus , setDisplayQues] = useState([]);


  const handleQuestion = (e) => {
    setQues(prev => {
      return {
        ...prev,
        query: e.target.value
      }
    })
  }
  
  
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    setDisplayQues(prev => {
      return [...prev, ques.query]
    })
    console.log(displayQeus[0])
    axios.post('http://localhost:3002/question', { "query": ques.query })
    .then(res => {
      if(res.status === 200){
        axios.get('http://localhost:3002/answer')
        .then(response => {
          console.log(response.data);
        }).catch(err => console.log(err))
      }
    }).catch(err => console.log(err))
  }

  return (
    <>
      <center>
        <div className="Main">
              <div className="container">
                <span className="QNAField">
                  <p>{displayQeus.map(items => {
                    return <p>{items}</p>
                  })}</p>
                </span>
              </div>
          <center>
            <div className="hero-container">
              <input type="text" className="main-input" onChange={handleQuestion} />
              <button type='button' onClick={handleSubmitQuestion} className="arrow"><img src={send} className="arrow-img" /></button>
            </div>
          </center>
        </div>
      </center>
    </>
  )
}

export default Heroimg2
