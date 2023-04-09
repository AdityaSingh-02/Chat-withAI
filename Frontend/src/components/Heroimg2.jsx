import React, { useEffect, useState } from 'react'
import "./HeroimgStyles2.css"
import send from "../assets/send.png"
import img from "../assets/login-background.jpg"
import axios from 'axios'

import { Navigate } from 'react-router-dom'

const Heroimg2 = () => {

  const [ques, setQues] = useState({ query: "" });
  const [displayQeus, setDisplayQues] = useState([]);
  const [navigate, setNavigate] = useState(false);

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
    setQues({ query: "" })
    console.log(displayQeus[0])
    axios.post('http://localhost:3002/question', { "query": ques.query })
      .then(res => {
        if (res.status === 200) {
          axios.get('http://localhost:3002/answer')
            .then(response => {
              if(response.status === 200){
                setDisplayQues(prev => {
                  return [...prev, response.data.content]
                })
              }
            }).catch(err => setNavigate(!navigate))
        }
      }).catch(err => console.log(err))
  }



  return (
    <>
      <center>
        <div className="Main">
          <div className="container">
            <span className="QNAField">
              <ul>
                {displayQeus.map((ques, index) => {
                  return (
                    <li key={index}>
                      <div className="question">
                        <p>{ques}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </span>
          </div>
          <center>
            <div className="hero-container">
              <input type="text"  className="main-input" onChange={handleQuestion} value={ques.query || ''} />
              <button type='button' onClick={handleSubmitQuestion} className="arrow"><img src={send} className="arrow-img" /></button>
            </div>
          </center>
        </div>
      </center>
      {navigate && <Navigate to="/error" />}
    </>
  )
}

export default Heroimg2
