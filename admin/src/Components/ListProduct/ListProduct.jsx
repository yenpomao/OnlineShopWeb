import React from 'react'
import './ListProduct.css'
import { useState } from 'react'
import { useEffect } from 'react';
import remove_icon from '../../assets/remove_icon.png'
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data) => {setAllProducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id})
    })
    await fetchInfo();
  } 
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr></hr>
        {allproducts.map((product, index) => {
          return <div className="listproduct-format-main listproduct-format" key={index}>
            <img src={product.image} alt='' className='listproduct-product-icon'></img>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img className='listproduct-remove-icon' src={remove_icon} alt='' onClick={() => {remove_product(product.id)}}></img>
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct