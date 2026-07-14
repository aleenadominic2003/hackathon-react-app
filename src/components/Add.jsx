import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Add = () => {

    const [input,changeInput]=useState(

      {
            TeamID: "",
            TeamName: "",
            TeamLeaderName: "",
            LeaderEmail: "",
            LeaderPhone: "",
            CollegeName: "",
            NumberofMembers: "",
            ProjectTitle: "",
            ProblemStatementTrack: "",
            TechnologyStack: "",
            MentorName: "",
            RegistrationDate: "",
            TableStationNumber: ""
          
      }

    )

    const inputHandler = (event) => {

        changeInput({...input,[event.target.name]:event.target.value})

    }
    
    const readValue =() => {

      console.log(input)

      axios.post("http://localhost:3000/add",input).then(

        (response)=>{

          console.log(response.data)
          alert("Details added successfully")

        }

      ).catch(
        (error)=>{
            console.log(error)
            alert("Error inserting data")
        }
      )

    }

  return (
    <div>
        <NavigationBar />

    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                  <label htmlFor="" className="form-label">TeamID</label>
                  <input type="text" className="form-control" 
                  name="TeamID"
                  value={input.TeamID}
                  onChange={inputHandler}
                  />


                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">TeamName</label>
                  <input type="text" className="form-control" 
                   name="TeamName"
                   value={input.TeamName}
                   onChange={inputHandler}
                  />

                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">TeamLeaderName</label>
                  <input type="text" className="form-control" 
                   name="TeamLeaderName"
                   value={input.TeamLeaderName}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">LeaderEmail</label>
                  <input type="text" className="form-control" 
                   name="LeaderEmail"
                   value={input.LeaderEmail}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                  <label htmlFor="" className="form-label">LeaderPhone</label>
                  <input type="text" className="form-control"
                   name="LeaderPhone"
                   value={input.LeaderPhone}
                   onChange={inputHandler}
                  />

                </div>

                 <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                  <label htmlFor="" className="form-label">CollegeName</label>
                  <input type="text" className="form-control"
                   name="CollegeName"
                   value={input.CollegeName}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">NumberofMembers</label>
                  <input type="text" className="form-control" 
                   name="NumberofMembers"
                   value={input.NumberofMembers}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">ProjectTitle</label>
                  <input type="text" className="form-control" 
                   name="ProjectTitle"
                   value={input.ProjectTitle}
                   onChange={inputHandler}
                  />

                </div>

               
                
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">ProblemStatementTrack</label>
                  <input type="text" className="form-control" 
                   name="ProblemStatementTrack"
                   value={input.ProblemStatementTrack}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">TechnologyStack</label>
                  <input type="text" className="form-control" 
                   name="TechnologyStack"
                   value={input.TechnologyStack}
                   onChange={inputHandler}
                  />

                </div>


                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">MentorName</label>
                  <input type="text" className="form-control" 
                   name="MentorName"
                   value={input.MentorName}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">RegistrationDate</label>
                  <input type="text" className="form-control" 
                   name="RegistrationDate"
                   value={input.RegistrationDate}
                   onChange={inputHandler}
                  />

                </div>

                 <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">TableStationNumber</label>
                  <input type="text" className="form-control" 
                   name="TableStationNumber"
                   value={input.TableStationNumber}
                   onChange={inputHandler}
                  />

                </div>




                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-success" onClick={readValue}>Submit</button>

                </div>
            </div>


            </div>
        </div>
    </div>


    </div>
  )
}

export default Add