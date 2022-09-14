import React from 'react';
import { useNavigate } from "react-router-dom";

const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '20px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

export const Login = () => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const navigate = useNavigate();

//user name validation
    const validateUsername = (username) => {
        if (username.length < 3) {
            return 'Username must be at least 3 characters long';
        }
        return '';
    }
//password validation
    const validatePassword = (password) => {
        if (password.length < 3) {
            return 'Password must be at least 3 characters long';
        }
        return '';
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(validateUsername(usernameRef.current.value) === '' && validatePassword(passwordRef.current.value) === '') {
          const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        navigate('/customerCredentials', {state: {data}});
        } else {  
            alert('Invalid username or password');
        }   
     
    };

    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button style={submitStyle} type="submit">Submit</button>
        </div>
      </form>
    );
};