
import { BrowserRouter, Routes, Route } from "react-router";
import {useState} from "react";
import Navbar from "./Components/Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from '../src/Pages/Home'
import './App.css'
import CreateWorkshopForm from './Pages/WorkshopPropose'
import YourProposals from './Pages/WorkShopStatus'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  return (
    <>
        <button
        className="hamburger-trigger"
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="Open menu"
      >
      <GiHamburgerMenu />
      </button>
        <Navbar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeItem={activePage}
          onNavigate={setActivePage}
        />

          
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propose" element={<CreateWorkshopForm />} />
        <Route path="/status" element={<YourProposals />} />
      </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
