import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContex'
import { useParams } from "react-router"
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Descriptiox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProucts from '../Components/RelatedProducts/RelatedProucts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
      <Descriptiox></Descriptiox>
      <RelatedProucts></RelatedProucts>
    </div>
  )
}

export default Product