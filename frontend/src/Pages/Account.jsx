// import React from 'react'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Account = () => {

 const [usernames, setUsernames] = useState([]); 
 const [emails, setEmails] = useState([]); 
  useEffect(() => {
    fetchUsers();
}, [])

const fetchUsers = () => {
    axios
    .get('http://localhost:3001/register')
    .then((res) => {
      const fetchedUsernames = res.data.map((value) => value.username);
      setUsernames(fetchedUsernames);     
      const fetchedEmails = res.data.map((value) => value.email);
      setEmails(fetchedEmails);     
    })
}
 
  return (
  <div className='bg-[#1a1a1a] text-white p-12 h-screen'>
    <Link className='w-[200px] h-[50px] border hover:bg-teal-900 m-3 px-4 py-1'  to={"/adduser"}>Add user</Link>

    <table className=' mt-14 border-collapse w-[50%]'> 
        <thead className='border p-8 text-center bg-[#1a1a1a]'>
          <tr className=''>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className='border text-center '>
          {
            <tr>
              <td> {usernames.map((username, index) => (
              <p className='mb-2' key={index}>{username}</p>
            ))}</td>
            <td>
            {emails.map((email, index) => (
            <p className='mb-2' key={index}>{email}</p>
          ))}
            </td>
           
            </tr>
          }
        </tbody>
    </table>
  </div>
  )
}

export default Account
