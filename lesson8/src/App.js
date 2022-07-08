
import { useState } from 'react';
import './App.css';

function App() {

const [isLoading, setLoading] =  useState(false);

  const [products, setProducts] = useState(null);
  const [todos, setTodos] = useState(null);
  const [photos,setPhotos] = useState(null);

  const fetchData1 = async () => {
    setLoading(true)
    const response1 = await fetch('https://fakestoreapi.com/products');
    const data1 = await response1.json();
    setProducts(data1);
    setLoading(false);
  }

  const fetchData2 = async () => {
    const response2 = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data2 = await response2.json();
    setTodos(data2);
  }

  const fetchData3 = async () => {
    const response3 = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data3 = await response3.json();
    setPhotos(data3);
  }
  console.log(products);
  return (
    <div className="App">
        <div className='leftContent'>
          <button onClick={fetchData1}>{isLoading ? "Loading..." : "Get all Product"}</button>
          { products !==null &&
            products.map((product,index) => 
                <h3 key={index}>{product.title}</h3>
          )};
        </div>
        <div className='middleContent'>
        <button onClick={fetchData2}>Call API</button>
        {
          todos !== null &&
          todos.map((todo,index) => 
              <h3 key={index}>{todo.title}</h3>
        )};
        </div>
        <div className='rightContent'>
          <button onClick={fetchData3}>Call API</button>
          {
            photos !== null && 
            photos.map((photo, index) =>
              <h3 key={index}>{photo.title}</h3>
            )};
        </div>
    </div>
  );
}

export default App;
