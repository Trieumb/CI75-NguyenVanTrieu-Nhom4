import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

   const { productId } = useParams();

   useEffect( () => {
        getData();
   });

  const getData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await res.json();
        console.log(data.id);
    }
  return (
    <div>
        Index
    </div>
  )
}

export default ProductDetail