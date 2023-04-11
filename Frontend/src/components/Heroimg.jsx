import React from 'react'
import leftimg from "../assets/2.jpg"
import "./HeroimgStyles.css"
import { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Heroimg = () => {

    const [loginData, setLoginData] = useState({ name: '', ApiKey: null })
    const [navigate, setNavigate] = useState(false);

    const formAction = (e) => {
        const { name, value } = e.target
        setLoginData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (loginData.name.length > 4 || loginData.ApiKey.length > 10) {
            axios.post('http://localhost:8080/v1/api/login/auth', { "name": loginData.name, "apikey": loginData.ApiKey })
                .then(res => {
                    if (res.status === 200) {
                        axios.get('http://localhost:8080/v1/api/login/getAuth')
                            .then(response => {
                                axios.post('http://localhost:3002/getApi', { "api": response.data.slice(-1) })
                                .then(resp => {
                                    if(resp.data === 401){
                                        console.log('fail');
                                    }
                                });
                                setNavigate(!navigate);
                            })
                    } else {
                        console.log('fail');
                    }
                });
        }
    }

    return (
        <>
            <div className="Main-container">
                <div className="card-container">
                    <div className="left-img">
                        <center>
                            <img className="left-img-main" src={leftimg} />
                        </center>
                    </div>
                    <div className="right-login">
                        <form className="Login-page">
                            <center><div className="items">
                                <h3 className='welcome'>Welcome to Chat-ai</h3>
                            </div>
                            </center>
                            <center>
                                <div className="items">
                                    <label htmlFor="Name">Name</label>
                                    <br />
                                    <input id="Name" type="text" placeholder='Name' name='name' value={loginData.name} onChange={formAction} required />
                                </div>
                            </center>
                            <center>
                                <div className="items">
                                    <label htmlFor="Api Key">API Key</label>
                                    <br />
                                    <input id="Api Key" type="text" placeholder='API KEY' name='ApiKey' value={loginData.ApiKey} onChange={formAction} required />
                                </div>
                            </center>
                            <center>
                                <div className="items">
                                    <button className='submit' type='button' onClick={submitForm}>Submit</button>
                                    {navigate && (
                                        <Navigate to='/chat' replace='true' />
                                    )}
                                </div>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heroimg