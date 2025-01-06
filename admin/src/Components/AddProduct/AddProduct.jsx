import React from 'react'
import './AddProduct.css'
import upload from '../../assets/upload.png'
import { useState } from 'react'

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setproductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: "",

  })
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setproductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    try {
      let responseDate;
      let product = productDetails;
      let formData = new FormData();
      formData.append('product', image);
  
      // First fetch to upload the image
      const uploadResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
  
      responseDate = await uploadResponse.json();
      // console.log("Upload response:", responseDate);
  
      if (responseDate.success) {
        product.image = responseDate.image_url;
  
        // Second fetch to add whole product with image
        const addProductResponse = await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
  
        const data = await addProductResponse.json();
        // console.log("Add Product response:", data);
  
        data.success ? alert("Product added") : alert("Failed to add product");
      } else {
        alert("Image upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Price'></input>
        </div>

        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Price'></input>
        </div>

        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select  value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
            <option value='Women'>Women</option>
            <option value='men'>Men</option>
            <option value='kid'>Kid</option>
          </select>
        </div>

        <div className="addproduct-itemfield">
          <label htmlFor='file-input'>
            <img src={image?URL.createObjectURL(image):upload} alt='' className='addproduct-thumnail-img'></img>
          </label>
          <input onChange={imageHandler} type='file' name='image' id='file-input' hidden></input>
        </div>
      </div>
      <button onClick={() => {Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct