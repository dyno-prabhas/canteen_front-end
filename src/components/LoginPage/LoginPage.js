import React from 'react'
import './LoginPage.css'


function LoginPage() {
  return (
    
    <div class="login-container">
    <div class="form-container">
        <div className='log-heading'>
            <div class="buttons">
                <button className="button login-active-btn">Login</button>
                <button className="button signup-btn">Sign Up</button>
            </div>
        </div>

        <form id="login-form" class="form">
            
            <div class="input-group">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" required />
            </div>
            <div class="input-group">
                <label for="login-password">Password</label>
                <input type="password" id="login-password" required />
            </div>
            <button type="submit" class="btn"><a href='/home'>Login</a></button>
            <p class="toggle-link">Don't have an account? <a href="/signup" id="switch-to-signup">Sign Up</a></p>
        </form>
    </div>
</div>
  )
}

export default LoginPage