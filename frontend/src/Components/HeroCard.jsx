import  "../Styles/HomeStyle.css";
 import { CiUser } from "react-icons/ci";


function Card1() {
  return (
   <div className="hero-card">
      <div>
        <h1 className="hero-title">Welcome, User</h1>
        <p className="hero-subtitle">
    Information Related to your workshops will be shown here. You can also view the workshops you have proposed and their status.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            {/* <Icon d={icons.plus} size={15} fill="none" /> */}
            View Workshops
          </button>
         <button className="btn-outline">Porpose Workshop</button>
        </div>
      </div>
      <div className="hero-stats">
       <CiUser size={300}  color="white"/>
      </div>
    </div>
  );
}
export default Card1;