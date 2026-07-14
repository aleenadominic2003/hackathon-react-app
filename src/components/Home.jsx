import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <>
    <NavigationBar />

    <div className="container mt-5">
      <h1 className="text-center">LAB ENTRY APP</h1>

      <h2 className="text-center mt-4">
        Welcome to Our Hackathon  App
      </h2>

      <p className="mt-3 text-center">
       Hackathon App Description

Hackathon Team Management System is a web-based application developed to simplify the process of managing hackathon teams and their project details. The system allows users to register teams, add team members, assign project information, and maintain all records in a centralized MongoDB database. It provides an intuitive interface for creating, viewing, updating, and deleting team information, making team management efficient and organized during hackathon events.
      </p>
    </div>
    </>
  )
}

export default Home