import React, { useEffect, useState } from 'react'

function HomePage() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [age, setAge] = useState("");

  return (
    <div>
         <div className='container'>
      <div className="col">
                <h2>Create User</h2><br/>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="email" id='studentName' className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="kamal" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Address</label>
                            <input type="email" id='studentAddress' className="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="kandy" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" id='studentEmail' className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="email" id='studentPhone' className="form-control" value={Phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="0769151600" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">age</label>
                            <input type="email" id='studentAge' className="form-control" value={age} onChange={(e) => { setAge(e.target.value) }} placeholder="25" />
                        </div>
                        <button type="button" className="btn btn-primary"  style={{marginRight: '1rem'}} onClick={()=>addUser({name,address,email,Phone,age})} >Save Student</button>
                    </div>
                    </div>
    </div>
  )
}

export default HomePage