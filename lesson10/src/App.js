
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Home';
import Login from './Components/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
