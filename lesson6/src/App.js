
import './App.css';
import FormTodoTask from './Components/FormTodoTask';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <FormTodoTask/>
      <ToastContainer />
    </div>
  );
}

export default App;
