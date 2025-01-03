import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={ logo } className='nav-logo'></img>
        <img src={ user } className='nav-profile'></img>
    </div>
  )
}

export default Navbar