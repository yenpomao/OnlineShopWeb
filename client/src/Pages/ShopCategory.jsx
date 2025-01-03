import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContex'
import Item from '../Components/Item/Item'
import dropdown_icon from '../Components/Assets/dropdown-icon.png'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  
  const filteredProducts = all_product.filter((item) => item.category === props.category);
  const count = filteredProducts.length;  

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{count}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
};


export default ShopCategory