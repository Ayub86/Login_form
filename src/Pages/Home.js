import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router'
// import '../App.css'
import '../assests/login.css'


const Home = () => {
    const naviagte = useNavigate();
    const navigatetoLogin=()=>{
         localStorage.removeItem("isAuth",true) ;
         naviagte("/login")
         toast.success("User LogOut Successfully")
     }
    return (
        <div className='login'>
            <h3>Home Page</h3>
            <button className='btn btn-dark' 
            onClick={()=>navigatetoLogin()}>
            Log Out
            </button>
        </div>
    )
}

export default Home
