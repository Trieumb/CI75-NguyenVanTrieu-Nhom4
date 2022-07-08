import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const getDataLogin = (e) => {
        const {value, name} = e.target;
        setInput(() =>{
            return{
            ...input, [name]:value
            }
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const getUser = localStorage.getItem('user');
        const {email, password} = input;
    
        if(email === ""){
            toast.warning("Email should not be empty!")
        }
        else if(password === ""){
            toast.warning("Password should not be empty!")
        }else{
            if(getUser && getUser.length){
                const userData = JSON.parse(getUser);
                const userLogin = userData.filter((el,k) => {
                    return el.email === email && el.password === password
                });
              if(userLogin.length === 0){
                  toast.error('email or password invalid!')    
              }else{
                  toast.success('user login successfuly')
              }
            }
        }
    }
  return (
    <div className='login-form'>
        <h3 className="login-title" style={{textAlign:'center', paddingTop: 20}}>Login</h3>
        <form className='form' onSubmit={handleLogin}>
            
            <input type='email' 
            name='email'
            placeholder='Enter email'
            onChange={getDataLogin}>
            </input>
            <input type='password' 
            name='password'
            placeholder='Enter password'
            onChange={getDataLogin}></input>
            <button type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login