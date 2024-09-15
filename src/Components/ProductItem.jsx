import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

  const {currency} = useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/Product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transation ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
