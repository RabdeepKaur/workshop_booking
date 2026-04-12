import { lazy,Suspense } from "react";
import  "../Styles/HomeStyle.css";
 import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
// add lazy loading here for the icons and image

function Card1() {
  const navigate = useNavigate();
  return (
   <div className="hero-card">
      <div>
        <h1 className="hero-title">Welcome, User</h1>
        <p className="hero-subtitle">
    Information Related to your workshops will be shown here. You can also view the workshops you have proposed and their status.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/catalog')}>
            {/* <Icon d={icons.plus} size={15} fill="none" /> */}
            View All Workshops
          </button>
         <button className="btn-outline" onClick={()=>navigate('/propose')}>Propose Workshop</button>
        </div>
      </div>
      <div className="hero-stats">
        <Suspense fallback={<div style={{width:300 , height:300}}/>}>
       <CiUser size={300}  color="white"/>
       </Suspense>
      </div>
    </div>
  );
}
export default Card1;