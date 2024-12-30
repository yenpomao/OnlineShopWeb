import React from 'react'
import Hero from '../Components/Hero/Hero.jsx'
import Popular from '../Components/Popular/Popular.jsx'
import Offers from '../Components/Offers/Offers.jsx'
import NewCollections from '../Components/NewCollections/NewCollections.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'

export const Shop = () => {
  console.log('Shop')
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
    </div>
  ) 
}

export default Shop
 