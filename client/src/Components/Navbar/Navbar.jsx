import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import './Navbar.css';
import { Link } from 'react-router';

function Navbar(props) {
  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='Logo'></img>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li className={menu === 'shop' ? 'active-menu' : ''} onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
        </li>
        <li className={menu === 'mens' ? 'active-menu' : ''} onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
        </li>
        <li className={menu === 'womens' ? 'active-menu' : ''} onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
        </li>
        <li className={menu === 'kids' ? 'active-menu' : ''} onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={cart} alt='Cart' className="cart-icon"></img>
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;