import React from 'react'
import "./style2.css"

const Product = ({product}) => {
  return (
    <div className='product'>
        <h3 className="name">{product.title}</h3>
        <p className="category">{product.category}</p>
        <div className="image">
        <img src={product.image} alt="" />
        </div>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
    </div>
  );
};

export default Product