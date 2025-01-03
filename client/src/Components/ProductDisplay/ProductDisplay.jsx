import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContex';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''></img>
                <img src={product.image} alt=''></img>
                <img src={product.image} alt=''></img>
                <img src={product.image} alt=''></img>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt=''></img>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>121</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                <div className="productdisplay-right-description">
                    Stylish and comfortable Men's Casual Shirt, perfect for everyday wear or casual outings.
                </div>
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
            <p className='productdisplay-right-category'>
                <span>Category: </span>
                Women, T-Shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tag: </span>
                Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay