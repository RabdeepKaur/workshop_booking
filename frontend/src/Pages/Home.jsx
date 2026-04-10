import Navbar from "../Components/Navigation"
import Card1 from "../Components/HeroCard"
import Card2 from "../Components/SuggestionCard"
import "../Styles/HomeStyle.css";
 import { useState } from "react";
 import Sidebar from "../Components/NavMobile";
import { FaArrowRight } from "react-icons/fa";

 

const Home = () => {
 const [sidebarOpen, setSidebarOpen] = useState(false);
 
 
  return (
    <>
      <div className="app-shell">
         
        {/* <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /> */}
        <div className="main-content">
         
          <main className="page">
 
            {/* Hero Card */}
            <Card1 />
 
            {/* Continue Curating */}
            <div className="section-header">
              <div>
                <div className="section-title">Your Current Worksop</div>
                <div className="section-sub">Pick up where you left off in your editorial workflow.</div>
              </div>
              <a className="view-all">View All Workshops <FaArrowRight /></a>
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
            ©FOSSEE  All Rights Reserved. &nbsp;·&nbsp; Privacy Policy &nbsp;·&nbsp; Terms of Service &nbsp;·&nbsp; Accessibility &nbsp;·&nbsp; Contact
          </footer>
        </div>
      </div>
    </>
  );
}
 
   

export default Home;