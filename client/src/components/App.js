import '../style.css';
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/user";
import Signup from './Signup';
import LoginForm from './LoginForm';
import NavBar from "./NavBar";
import Home from './Home';
import Footer from './Footer';
import AboutUs from './AboutUs';
import logo from '../images/logo.png'; 
import FoodBusinessServices from '../pages/FoodBusinessServices';
import WasteFacilitator from '../pages/WasteFacilitator';
import FoodRequestor from '../pages/FoodRequestor';
import AddItem from '../pages/AddItem';
import Inventory from '../pages/Inventory';
import HistoryFoodRequestor from '../pages/HistoryFoodRequestor';
import Contact from './Contact';
import FoodSearch from '../pages/FoodSearch';
import WastePickupRequest from '../pages/WastePickupRequest';
import ViewWastePickupRequests from '../pages/ViewWastePickupRequests'
import BeforeLogin from './BeforeLogin';


function App() {
  const { user } = useContext(UserContext);

  if (!user) return <LoginForm />

  return ( 
    <>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <NavBar />
      </header>

        <main className="App-content">
          <Routes>
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/foodbusiness" element={<FoodBusinessServices />} />
            <Route path="/wastefacilitator" element={<WasteFacilitator />} />
            <Route path="/foodrequestor" element={<FoodRequestor />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/foodupdateshistory" element={<HistoryFoodRequestor />} />
            <Route path="/wastepickuprequest" element={<WastePickupRequest />} />
            <Route path="/viewwastepickuprequests" element={<ViewWastePickupRequests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/foodsearch" element={<FoodSearch />} />
            <Route path="/welcome" element={<BeforeLogin />} />
          </Routes>
        </main>
        <Footer />
      </>
  );
}

export default App;
