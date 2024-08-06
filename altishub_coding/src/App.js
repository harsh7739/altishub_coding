import logo from './logo.svg';
import './App.css';

import Home from './component/Home';
import RegistrationForm from './component/RegisterForm';
import Login from "./component/Login"
import Navbar from "./component/Routes/Navbar"
import MainRoute from './component/Routes/MainRoute';



function App() {
  return (
    <div className="App">
   <RegistrationForm />
   <Login />
     
    </div>
  );
}

export default App;
