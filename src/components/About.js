import React, { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  const[data,setData]=useState("");
  useEffect(()=>{
  axios.get("https://reqres.in/api/users?page=2",)
  .then((res)=>console.log(res.data))
},[])
console.log("data----->",data);

  return (
    <div>
      <h1>About Page</h1>
      {/* { data.map((data)=>{
        return(
          <>
          {data.email}
          
          </>
        )
       
      })} */}
    </div>
  )
}

export default About
