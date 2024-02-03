import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function HomePage() {
    const [uid,setUid] = useState("") ;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [age, setAge] = useState("");



    const addUser=()=>{
        const postData = {
            uid:uid,
            name:name,
            address:address,
            emai:email,
            Phone:Phone,
            age:age
  };
  
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer wys_EfEqKH02l3JndJBMDYpuMs4zsnvu9b0zzrfs' 
    },
    body: JSON.stringify(postData)
  };
  
  fetch('https://25349a425ea9433eadcc46517f9e4f85.weavy.io/api/users', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
    }   
    
   


    const getAll=()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': 'Bearer wys_EfEqKH02l3JndJBMDYpuMs4zsnvu9b0zzrfs' 
            },
          };
          
          fetch('https://25349a425ea9433eadcc46517f9e4f85.weavy.io/api/users', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((error) => {
              console.error('Error:', error);
            });
          
    }


    
    const deleteUser = () =>{
        const id = ''; // replace with your id
        const updateData = {
            uid:uid,
            name:name,
            address:address,
            emai:email,
            Phone:Phone,
            age:age
        };
        
        const requestOptions = {
          method: 'PATCH',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer wys_EfEqKH02l3JndJBMDYpuMs4zsnvu9b0zzrfs'
          },
          body: JSON.stringify(updateData)
        };
        
        fetch(`https://25349a425ea9433eadcc46517f9e4f85.weavy.io/api/users/${id}`, requestOptions)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch((error) => {
            console.error('Error:', error);
          });
        
    }
  return (
         <div className='container'>
      <div className="col">
                <h2>Create User</h2><br/>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input type="email" id='studentName' className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="kamal" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Address</label>
                            <input type="email" id='studentAddress' className="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="kandy" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email</label>
                            <input type="email" id='studentEmail' className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Phone</label>
                            <input type="email" id='studentPhone' className="form-control" value={Phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="0769151600" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">age</label>
                            <input type="email" id='studentAge' className="form-control" value={age} onChange={(e) => { setAge(e.target.value) }} placeholder="25" />
                        </div>
                        <button type="button" className="btn btn-primary"  style={{marginRight: '1rem'}} onClick={()=>addUser()} >Save Student</button>
                    </div>
                    </div>
  )
}

export default HomePage