import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/About/MyPortfolio';
import Blogs from './Pages/About/Blogs';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/Shared/NotFound';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      <Route path='/purchase/:purchaseId' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
      }></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
