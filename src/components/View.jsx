import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavigationBar from './NavigationBar'

const View = () => {

    const[data,changData]=useState(

        [

            
        ]

    )
    const fetchData = () => {

        axios.get("http://localhost:3000/view").then(

            (response) => {

                changData(response.data)

            }

        ).catch()

    }
    useEffect(

        () => {

            fetchData()

        },[]

    )
  return (
    <div>
        <NavigationBar />
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">
           

          <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-dark">
      <tr>
        
        <th>TeamID</th>
        <th>TeamName</th>
        <th>TeamLeaderName</th>
        <th>Leader Email</th>
        <th>Leader Phone</th>
        <th>College Name</th>
        <th>Number of Members</th>
        <th>Project Title</th>
        <th>Problem Statement Track</th>
        <th>Technology Stack</th>
        <th>Mentor Name</th>
        <th>Registration Date</th>
        <th>Table/Station Number</th>

        
      </tr>
    </thead>
    <tbody>
      {data.map((value, index) => (
        <tr key={index}>
          
          <td>{value.TeamID}</td>
          <td>{value.TeamName}</td>
          <td>{value.TeamLeaderName}</td>
          <td>{value.LeaderEmail}</td>
          <td>{value.LeaderPhone}</td>
          <td>{value.CollegeName}</td>
          <td>{value.NumberofMembers}</td>
          <td>{value.ProjectTitle}</td>
          <td>{value.ProblemStatementTrack}</td>
          <td>{value.TechnologyStack}</td>
          <td>{value.MentorName}</td>
          <td>{value.RegistrationDate}</td>
          <td>{value.TableStationNumber}</td>


          <td>
            <button className="btn btn-primary btn-sm">
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
           
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default View