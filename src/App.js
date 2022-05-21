import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/About/MyPortfolio';
import Blogs from './Pages/About/Blogs';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
    </Routes>
    </div>
  );
}

export default App;
