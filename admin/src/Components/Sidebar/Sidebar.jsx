import React from 'react'
import './sidebar.css'
import { Link } from 'react-router'
import add_product from '../../assets/add_product.png'
import list_product from '../../assets/list_product.png'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
            <img src={add_product} alt=''></img>
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
            <img src={list_product} alt=''></img>
            <p>List Product</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar