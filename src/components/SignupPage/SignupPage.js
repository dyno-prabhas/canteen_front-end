import React from 'react'
import './SignupPage.css'


function SignUp() {
  return (
    <div class="login-container">
    <div class="form-container">
        <div className='log-heading'>
            <div class="buttons">
                <button className="button login-btn">Login</button>
                <button className="button signup-active-btn">Sign Up</button>
            </div>
        </div>
     
        <form id="signup-form" class="form hidden">
            
            <div class="input-group">
                <label for="signup-name">Full Name</label>
                <input type="text" id="signup-name" required />
            </div>
            <div class="input-group">
                <label for="signup-email">Email</label>
                <input type="email" id="signup-email" required />
            </div>
            <div class="input-group">
                <label for="signup-password">Password</label>
                <input type="password" id="signup-password" required />
            </div>
            <button type="submit" class="btn">Sign Up</button>
            <p class="toggle-link">Already have an account? <a href="/login" id="switch-to-login">Login</a></p>
        </form>
    </div>
</div>
  )
}

export default SignUp