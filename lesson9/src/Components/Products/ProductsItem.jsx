import React from 'react'
import { Link } from 'react-router-dom';

const ProductsItem = ({product}) => {

    const {title, image, price,rating,id} = product;
  return (
    <div className='product-item'>
        <Link className='product-item-link' to={`/Components/${id}`}>
          <img className='product-img' src={image} alt="" />
          <p className='product-titile'>{title}</p>
          <p className='product-rating'>Vote: {rating.rate}</p>
          <p className='product-price'>Price: {price}$</p>
        </Link>
    </div>
  )
}

export default ProductsItem