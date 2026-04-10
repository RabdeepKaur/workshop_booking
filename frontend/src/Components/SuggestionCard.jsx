import "../Styles/HomeStyle.css";
import { FaArrowRight } from "react-icons/fa";

function Card2() {
  return (
    <div className="trending-grid">
      {/* Featured article */}
      <div className="trending-featured">
        <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" alt="Featured" />
        <div className="trending-featured-content">
          <div className="insight-label">
            {/* <Icon d={icons.star} size={12} fill="var(--mint)" stroke="none" /> */}
            Workshop Insight
          </div>
          <h3>Workshop Name</h3>
          <p>WorkShop Description.</p>
          <div className="read-more">
            Read Full Analysis <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card2;