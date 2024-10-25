import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

//import CanteenCart from './components/CanteenCart/CanteenCart';
//import StudentProfile from './components/StuProfile/StuProfile';
import Profile from './components/pages/Profile';
import Cart from './components/pages/Cart';
import SignUp from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage';


function App() {
  console.log("adcd");
  
  return (
    
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        
      </Routes>
    </Fragment>
  );
}

export default App;
