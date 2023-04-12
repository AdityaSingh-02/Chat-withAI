import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='AboutContainer'>
        <div className="aboutSection">
          <h1>About</h1>
          <h2>Project Details</h2>
          <p>This Project is based on ChatGPT API, The basic Idea behind this project is to provide user interaction </p>
          <p>User can chat with AI and ask questions.</p>
          <br />
          <h2>Technologies Used</h2>
          <ul>
            <li>React - for Frontend</li>
            <li>SpringBoot - for Backend and providing REST api</li>
            <li>NodeJs - For Fething Data from OPENAI</li>
          </ul>
          <br />
          <h2>Contributors</h2>
          <p>This project is completed in Group By - </p>
          <ul>
            <li>Aamri Guleria</li>
            <li>Aditya Singh</li>
            <li>Deepraj Baidya</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About