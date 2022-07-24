import axios from 'axios'
import React, { useEffect } from 'react'
import Footer from '../Footer'

const Teachers = ({
  inactive,
  toggleoff,
  teacherData,
  setTeacherData,
  teacherHandleSelected,
}) => {
  const getTeacherData = async () => {
    try {
      const resp = await axios.get(
        'https://6276914abc9e46be1a1801f3.mockapi.io/teachers',
      )

      setTeacherData(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(
        `https://6276914abc9e46be1a1801f3.mockapi.io/teachers/${id}`,
      )

      setTeacherData(teacherData.filter((row) => row.id !== id))
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  useEffect(() => {
    getTeacherData()
  }, [])
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div className="container">
          <h1>List of Teachers</h1>
          <p>
          As a teacher, your role in a student’s life goes beyond providing a great education. You’re a leader, role model, coach, advisor and facilitator of positive growth. Since students spend so much of their time in your classroom, it’s up to you and your fellow educators to make school a positive and inspiring environment where children can do their best work and be their best selves.
          </p>

          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">PhoneNumber</th>
                  <th scope="col">Batch Assigned</th>
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {teacherData.map((row) => (
                  <tr key={row.id}>
                    <th>{row.id}</th>
                    <td>{row.FirstName}</td>
                    <td>{row.LastName}</td>
                    <td>{row.JoiningDate}</td>
                    <td>{row.PhoneNumber}</td>
                    <td>{row.BatchAssigned}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={(e) => teacherHandleSelected(row.id)}
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

export default Teachers