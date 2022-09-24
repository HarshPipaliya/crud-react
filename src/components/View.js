import React, { useEffect, useState } from 'react'

const View = () => {
  const [data, setData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []);
  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('data'));
    console.log(data)
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="text-center">Users</h1>
        <table className="table table-stripped text-center">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td><input type="checkbox" /></td>
                    <td>{user.id}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.gender}</td>
                    <td>
                      {
                        user.hobby.map((hobby)=> hobby + " ")
                      }
                    </td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                    <td>
                      <button className="btn btn-primary">Update</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default View