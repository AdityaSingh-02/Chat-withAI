import React from 'react'
import leftimg from "../assets/left-image.jpg"
import "./HeroimgStyles.css"
const Heroimg = () => {
  return (
    <div className="Main-container">
        <div className="card-container">
            <div className="left-img">
                <center>
                <img className="left-img-main" src={leftimg}/>
                </center>
            </div>
            <div className="right-login">
                <form className="Login-page">
                <center><div className="items">
                    <h3 className='welcome'>Welcome</h3>
                    </div>
                    </center>
                    <center>
                    <div className="items">
                    <label for="Name">Name</label>
                    <br/>
                    <input id="Name" type="text" placeholder='Name....'/>
                    </div>
                    </center>
                    <center>
                    <div className="items">
                    <label for="Api Key">API Key</label>
                    <br/>
                    <input id="Api Key" type="text" placeholder='API KEY....'/>
                    </div>
                    </center>
                    <center>
                    <div className="items">
                    <button className='submit'>Submit</button>
                    </div>
                    </center>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default Heroimg