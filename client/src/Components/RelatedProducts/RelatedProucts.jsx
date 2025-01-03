import React from 'react'
import './RelatedProucts.css'
import all_products from '../Assets/all_products'
import Item from '../Item/Item'


function RelatedProucts() {
  const random_number = Array.from({ length: 4 }, () => Math.floor(Math.random() * all_products.length));
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr></hr>
        <div className="relatedproducts-item">
        { random_number.map((index) => {
            const item = all_products[index];
            return (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            )
        })
            
        }
        </div>
    </div>
  )
}

export default RelatedProucts