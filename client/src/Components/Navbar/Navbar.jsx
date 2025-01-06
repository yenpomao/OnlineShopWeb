import React, { useContext, useRef, useState } from 'react';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import './Navbar.css';
import { Link } from 'react-router';
import { ShopContext } from '../../Context/ShopContex';
import dropdownicon from '../Assets/dropdown-icon.png';

function Navbar(props) {
  const [menu, setMenu] = useState('shop');
  const { getTotalItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible'); // Toggle menu visibility
    e.currentTarget.classList.toggle('open'); // Add rotation to the icon
};

  
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img className='nav-logo-icon' src={logo} alt='Logo'></img>
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdownicon} alt=''></img>
      <ul ref={menuRef} className="nav-menu">
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
        <li className={menu === 'reference' ? 'active-menu' : ''} onClick={() => setMenu('reference')}>
          <Link style={{ textDecoration: 'none' }} to='/reference'>Reference</Link>
        </li>

      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button
            onClick={() => {
            localStorage.removeItem('auth-token');
            window.location.replace('/');
            }}
          >
            Logout
          </button>
            ) : (
    <Link to='/login'>
      <button>Login</button>
    </Link>
  )}
        <Link to='/cart'>
          <img src={cart} alt='Cart' className="cart-icon"></img>
        </Link>
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
