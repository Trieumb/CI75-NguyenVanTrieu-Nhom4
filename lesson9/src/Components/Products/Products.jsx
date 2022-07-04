import React, { useEffect, useState } from 'react'
import ProductsItem from './ProductsItem';
import './Style.css'


const Products = () => {

const [products, setProducts] = useState(null);

useEffect( () => {
    handleGetData();
},[]);

const handleGetData =  async () => {

    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);

    } catch (e) {
        console.log(e);
    }
}

  return (
    <div className='products-container'>
        {   products &&
            products.map((product, index) => (
                <ProductsItem  product={product} key={index}/>)
        )}
    </div>
  )
}

export default Products