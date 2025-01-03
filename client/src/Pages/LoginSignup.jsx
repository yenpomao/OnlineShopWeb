import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your name'></input>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have account?
          <span> Login here</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''></input>
            <p>By continuing, I agree to the terms of use & private policy </p>
          </div>
        </p>
      </div>
    </div>
  )

}

export default LoginSignup; 