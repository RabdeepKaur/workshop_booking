import {lazy , Suspense} from "react";
import {Helmet} from "react-helmet-async";

 const Card1=lazy(()=>import("../Components/HeroCard"));
 const Card2=lazy(()=>import("../Components/SuggestionCard"));

 const CardSkeleton = ({ height = "200px" })=>{
 <div
    style={{
      height,
      borderRadius: "12px",
      background: "var(--border)",
      animation: "pulse 1.5s ease-in-out infinite",
    }}
  />
 }
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | FOSSEE Workshop Booking</title>
        <meta
          name="description"
          content="Discover, propose and track free Python and engineering workshops offered by FOSSEE, IIT Bombay."
        />
        <meta property="og:title" content="Home | FOSSEE Workshop Booking" />
        <meta
          property="og:description"
          content="Discover, propose and track free Python and engineering workshops offered by FOSSEE, IIT Bombay."
        />
        <meta property="og:url" content="https://workshop.fossee.in/" />
        <link rel="canonical" href="https://workshop.fossee.in/" />
      </Helmet>
      <div className="app-shell">
         
        {/* <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /> */}
        <div className="main-content">
         
          <main className="page">
 <div className="section-title" style={{ marginBottom: "20px" }}>
    FOSSEE Workshops
  </div>
            {/* Hero Card */}
            <Suspense fallback={<div><CardSkeleton /></div>}>
            <Card1 />
            </Suspense>
            {/* Continue Curating */}
            <div className="section-header">
              <div>
                <div className="section-title">Your Current Workshops</div>
                <div className="section-sub">See the workshops you are attending ,have proposed and their status.</div>
              </div>
            </div>
            <div className="Section-header">
              <Suspense fallback={<div><CardSkeleton /></div>}>
           <Card2/>
           </Suspense>
            </div>

 
            {/* Trending */}
            <div className="section-header">
              <div style={{marginTop:"32px"}}>
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