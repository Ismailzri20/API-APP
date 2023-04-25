import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './UserList.css';

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setListOfUsers(response.data);
        })
        .catch(error => {
        console.log(error);
        });
    }, []);
  
    return (
      <div className="user-list">
        {listOfUsers.map(user => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <p className='user-phone'>{user.phone}</p>
          </div>
        ))}
      </div>
    );
  }
  
export default UserList;