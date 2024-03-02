import React, { useState } from 'react'
// import {useNavigate} from "react-router-dom"
import registerapi from '../api/registerapi';

const Register = () => {
        const [data,setData]=useState({username:"",email:"",password:""});
        const handleChange=(e)=>{
            const{name,value}=e.target;
            setData({...data,[name]:value});
        };
        // const navigate=useNavigate();
        const handleSumbit = async (e) => {
          e.preventDefault();
          const response = await registerapi(data);
          // console.log(response.token);
          localStorage.setItem('token',response.token)
          // navigate("/");
        };
  return(
    <div>
        <form onSubmit={handleSumbit}>
        <div className="register-page">
          <div className="form">
            <div className="register">
              <div className="register-header">
                <h3>Register</h3>
                <p>Please enter your credentials to Register.</p>
              </div>
            </div>
        <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>    
        <input type="text" name="username" value={data.username} onChange={(e)=>handleChange(e)}placeholder='Username'/>
        <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>    
        <input type="password" name="email" value={data.email} onChange={(e)=>handleChange(e)}placeholder='Email'/>
        <label htmlFor="exampleInputEmail1" className="form-label">
                Password
              </label>    
        <input type="text" name="password" value={data.password} onChange={(e)=>handleChange(e)}placeholder='password'/>
        <button type="submit">
                submit
              </button>

    </div>
    </div>
    </form>
    </div>
    );
  };
export default Register;