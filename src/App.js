import logo from './logo.svg';
import './App.css';
import './css/main.css';
import './css/bootstrap.min.css';
// import './js/new.js';
// import './js/bootstrap.bundle.min.js'
import Home from './pages/home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Faq from './pages/faq/Faq';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/faq' element={<Faq/>}/>
   </Routes>
   </BrowserRouter>
  

   </>
  );
}

export default App;
