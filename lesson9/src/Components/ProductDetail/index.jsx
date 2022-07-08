import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

   const { productId } = useParams();
   const [detailProduct, setDetailProduct] = useState(null);

   useEffect(() => {

    const getData = async () => {

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await res.json();
        setDetailProduct(data);
  
      } catch (e) {
          console.log(e);
      }
          
  }
    getData();
   },[productId]);

  
    console.log(detailProduct);
  return (
    <div>
        <p>{detailProduct && detailProduct.title}</p>
    </div>
  )
}

export default ProductDetail