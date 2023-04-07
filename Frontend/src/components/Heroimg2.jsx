import React, { useEffect, useState } from 'react'
import "./HeroimgStyles2.css"
import send from "../assets/send.png"
import img from "../assets/login-background.jpg"
import axios from 'axios'

const Heroimg2 = () => {

  const[ques , setQues] = useState({query:""});
  const[data , setData] = useState('');
  const [api , setApi] = useState({});

  useEffect(() => {
    getApiKey();
    setTimeout(() => {
      getApiKey();
    }, 2000);
  }, [])
  

  const handleQuestion = (e) => {
    setQues(prev => {
      return {
        ...prev,
        query: e.target.value
      }
    })
  }

  const getApiKey = () =>{
    axios.get('http://localhost:8080/v1/api/login/getAuth')
    .then(response => {
        setApi(prev => {
            return {
                ...prev,
                api: response.data.slice(-1)
            }
          })
          console.log(api);
  });
  }

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/question', { "query": ques.query })
    .then(res => {
      setData(res.data)
    })
  }

  return (
    <>
      <center>
        <div className="Main">
          <center>
            <div className="hero-container">
              {data}
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
