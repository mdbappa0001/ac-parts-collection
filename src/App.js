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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import AllParts from './Pages/Purchase/AllParts';


export const PurchaseContext = createContext();

function App() {

const [parts, setParts] = useState([]);

  return (

<PurchaseContext.Provider value={[parts, setParts]}>

    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/allParts' element={
        <RequireAuth>
          <AllParts></AllParts>
        </RequireAuth>
      }></Route>
      <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      <Route path='/purchase/:purchaseId' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
      }></Route>
      
      <Route path='/dashboard' element={
        <RequireAuth>
          <DashBoard></DashBoard>
        </RequireAuth>
      }>
<Route index element={<MyOrders></MyOrders>}></Route>
<Route path='review' element={<AddReview></AddReview>}></Route>
<Route path='profile' element={<MyProfile></MyProfile>}></Route>
      </Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <ToastContainer />
    </div>
    </PurchaseContext.Provider>
  );
}

export default App;
