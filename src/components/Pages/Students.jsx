import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer'

const Students = ({
  inactive,
  toggleoff,
  handleSelected,
  stuData,
  setStuData,
}) => {
  const studentData = async () => {
    try {
      const resp = await axios.get(
        'https://6276914abc9e46be1a1801f3.mockapi.io/students',
      )

      setStuData(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(
        `https://6276914abc9e46be1a1801f3.mockapi.io/students/${id}`,
      )

      setStuData(stuData.filter((row) => row.id !== id))
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  useEffect(() => {
    studentData()
  }, [])

  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div className="container col-xs-12">
          <h1>List of Students</h1>
          <p>
          What you learn in college today prepares you for making your own way on the job market in the future. You won’t be able to use everything you learned but you’ll have a great foundation to build on. And don’t underestimate the power of learning soft skills like teamwork, time management, and critical thinking as you work your way through group projects and deadlines.
          </p>

          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Course</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {stuData.map((row) => (
                  <tr key={row.id}>
                    <th>{row.id}</th>
                    <td>{row.FirstName}</td>
                    <td>{row.LastName}</td>
                    <td>{row.Batch}</td>
                    <td>{row.Course}</td>
                    <td>{row.PhoneNumber}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={(e) => handleSelected(row.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Students