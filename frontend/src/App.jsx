
import { BrowserRouter, Routes, Route } from "react-router";
import {useState} from "react";
import Navbar from "./Components/Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from '../src/Pages/Home'
import './App.css'
import "../src/Styles/HomeStyle.css"
import CreateWorkshopForm from './Pages/WorkshopPropose'
import YourProposals from './Pages/WorkShopStatus'
import WorkshopStats from './Pages/WorkshopStats'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  return (
    <>
         <button
        className="hamburger-trigger"
      onClick={() => setSidebarOpen(true)}
  style={{ display: sidebarOpen ? "none" : "flex" }}
  aria-label="Open navigation menu"
      >
      <GiHamburgerMenu />
      </button>
        <Navbar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeItem={activePage}
          onNavigate={setActivePage}
        /> 

          
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propose" element={<CreateWorkshopForm />} />
        <Route path="/status" element={<YourProposals />} />
        <Route path="/catalog" element={<WorkshopStats />} />
      </Routes>
   
 
    </>
  )
}

export default App
