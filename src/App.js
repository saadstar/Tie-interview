import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Tablet } from './components/Tablet';
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <h1>Employee Relocation Workflow</h1>
      <Tablet />
      <ToastContainer/>
    </div>
  );
}

export default App;
