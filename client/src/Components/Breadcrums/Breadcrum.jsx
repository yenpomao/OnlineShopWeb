import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/arrow.png'
function Breadcrum(props) {
    const { product } = props;
  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt=''></img>
        SHOP<img src={arrow_icon} alt=''></img>
        {product.category}<img src={arrow_icon} alt=''></img>
        Men's Casual Shirt  
        
    </div>
  )
}

export default Breadcrum