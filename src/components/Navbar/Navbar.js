import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <header className="header">
        <p className="logo"><a href='/'>Raghu Canteen</a></p>
        <ul className="links">
            <li className="link-item">
                <a className="link" href="/cart">Cart</a>
            </li>
            <li className="link-item">
                <a className="link" href="/profile">Profile</a>
            </li>
            <li className="link-item">
                <a className="link" href="/login">Logout</a>
            </li>
        </ul>
    </header>
    </div>
  )
}

export default Navbar