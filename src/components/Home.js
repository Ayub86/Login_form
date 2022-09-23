import React, { useState } from 'react'
import '../assests/login.css'
import axios from 'axios';

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }
    axios.post("https://reqres.in/api/users?page=2",).then((res)=>console.log("----->",res.data))
    setEmail("");
    setPassword("");
    console.log("datasubmitted----->",data);
  }
  return (
    <>
       <div className="app">
        <form action='' onSubmit={handleSubmit}>
          <p className="offscreen" aria-live="assertive"></p>
          <h1>Sign In</h1>
          
            <label htmlFor="username">Email:</label>
            <input type="email" name='email'   id="username" autocomplete="off" required="" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id="password" required="" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className='btn btn-primary mt-2'>Sign In</button>
          
          <p>Need an Account?<br />
            <span className="line">
              <a href="/">Sign Up</a></span></p>
        </form>
        </div>

    </>
  )
}

export default Home
