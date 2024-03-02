import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import loginapi from '../api/loginapi';
import { Link } from "react-router-dom";


const Login = () => {
  const [data,setData]=useState({email:"",password:""});
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setData({...data,[name]:value});
  };

  // const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await loginapi(data);
    // console.log(response.token);
    localStorage.setItem('token',response.token)
    // navigate("/");
  };
  return (
    <>
    <div className='bg'>
      <form onSubmit={handleSubmit}>
            <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>Login</h3>
                <p>Please enter your credentials to Login.</p>
              </div>
              </div>
            <label>Enter the UserDetails</label>
            <input type="text" placeholder="email" name="email" value={data.email} onChange={(e)=>handleChange(e)}/>
            <label>Password</label>
            <input type="password" placeholder="password" name="password" value={data.password} onChange={(e)=>handleChange(e)}/>           
            <button type="submit">
                submit
              </button>
              <p className="message">Not registered? <Link to="/register">Register</Link></p>

            </div>
    </form>
    </div>
    </>
  );
}
export default Login;
