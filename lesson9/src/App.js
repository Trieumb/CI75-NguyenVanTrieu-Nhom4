
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products/Products';
import ProductDetail from './Components/ProductDetail';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element=""></Route>
              <Route path='/Components' element={< Products />}></Route>
              <Route path='/Components/:productId' element={< ProductDetail />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
