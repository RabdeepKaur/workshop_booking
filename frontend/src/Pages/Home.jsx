import Navbar from "../Components/Navigation"
import Card1 from "../Components/HeroCard"
import Card2 from "../Components/SuggestionCard"

 import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

 

const Home = () => {
  return (
    <>
      <div className="app-shell">
         
        {/* <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /> */}
        <div className="main-content">
         
          <main className="page">
 <div className="section-title" style={{ marginBottom: "20px" }}>
    FOSSEE Workshops
  </div>
            {/* Hero Card */}
            <Card1 />
 
            {/* Continue Curating */}
            <div className="section-header">
              <div>
                <div className="section-title">Your Current Worksop</div>
                <div className="section-sub">Pick up where you left off in your editorial workflow.</div>
              </div>
            </div>
            <div className="Section-header">
           <Card2/>
            </div>

 
            {/* Trending */}
            <div className="section-header">
              <div>
                <div className="section-title">Trending in Workshop</div>
                <div className="section-sub">See all the trending workshops in your field.</div>
              </div>
            </div>
            <Card2 />
 
          </main>
          <footer style={{ textAlign: "center", padding: "24px", fontSize: "11px", color: "var(--muted)", borderTop: "1px solid var(--border)", marginTop: "16px", letterSpacing: ".06em" }}>
            ©FOSSEE  All Rights Reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
 
   

export default Home;