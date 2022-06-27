import React from 'react'
import "./style.css"


const Person = ({person}) => {
  return (
    <div className='person'>
        <h3 className="name">Name: {person.name}</h3>
        <p className="userName">UserName: {person.username}</p>
        <p className="mail">Email: {person.email}</p>
        <p className="address">Street: {person.address.street}</p>    
    </div>
  );
};

export default Person