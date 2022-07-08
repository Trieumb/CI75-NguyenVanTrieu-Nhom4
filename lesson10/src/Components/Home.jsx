import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [data,setData] = useState([]);
    const getData = (e) => {
        const {value, name} = e.target;
        setInput(() =>{
            return{
                ...input, [name]:value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name , email, password} = input;
        console.log(input);
        if(name === ""){
            toast.warning("Name should not be empty!")
        }
        else if(email === ""){
            toast.warning("Email should not be empty!")
        }
        else if(password === ""){
            toast.warning("Password should not be empty!")
        }
        else if(password.length < 6){
            toast.warning("password length greater 5!")
        }else{
           setData(localStorage.setItem("user",JSON.stringify([...data, input])));
           toast.success('Register sucessfully!')
        }  
    }
  return (
    <div className='container'>
        <h3>Register</h3>
        <form className='form' onSubmit={handleSubmit}> 
            <input type='text'  
            name='name'
            placeholder='Enter your name'
            onChange={getData}>
            </input>
            <input type='email' 
            name='email'
            placeholder='Enter your email'
            onChange={getData}>
            </input>
            <input type='password'
            name='password' 
            placeholder='Enter your password'
            onChange={getData}>
            </input>
            <button type='submit'>Submit</button>
        </form>
        <p>You Have an Account? <span><NavLink className='link' to='/Login'>Log In</NavLink></span></p>
    </div>
  )
}

export default Register