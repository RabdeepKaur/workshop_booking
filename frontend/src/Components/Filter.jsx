import { RxCross2 } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClock } from "react-icons/io";

const workshop = [
  {
    id: 1,
    title: "Advanced Qualitative Methodology & Analysis",
    tag: "Research", tagClass: "tag-research",
    duration: "4 Hours", level: "Advanced",
    img:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    
  },
  {
    id: 2,
    title: "Inclusive Classroom Strategies for Higher Ed",
    tag: "Pedagogy", tagClass: "tag-pedagogy",
    duration: "2 Hours", level: "Intermediate",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
  {
    id: 3,
    title: "AI Tools for Bibliographic Management",
    tag: "Technology", tagClass: "tag-technology",
    duration: "90 Mins", level: "Introductory",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
  {
    id: 4,
    title: "Data Visualization for Social Research",
    tag: "Analytics", tagClass: "tag-analytics",
    duration: "3 Hours", level: "Intermediate",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
];

function FilterPanel({ filters, onChange, onClear, onView, onDownload }) {
  return (
    <>
    <div className="filter-panel">
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="clear-btn" onClick={onClear}>
          <RxCross2 />Clear
        </button>
      </div>
 
      <div className="filter-field">
        <label className="filter-label">From Date:</label>
        <input type="date" value={filters.fromDate} onChange={e => onChange("fromDate", e.target.value)} />
      </div>
 
      <div className="filter-field">
        <label className="filter-label">To Date:</label>
        <input type="date" value={filters.toDate} onChange={e => onChange("toDate", e.target.value)} />
      </div>
 
      <div className="filter-field">
        <label className="filter-label">Workshop:</label>
        <div className="select-wrap">
          <select value={filters.workshop} onChange={e => onChange("workshop", e.target.value)}>
            <option value="">----------</option>
            {workshop.map(w => <option key={w.id} value={w.id}>{w.title}</option>)}
          </select>
        </div>
      </div>
 
      <div className="filter-field">
        <label className="filter-label">State:</label>
        <div className="select-wrap">
          <select value={filters.state} onChange={e => onChange("state", e.target.value)}>
            <option value="">----------</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Upcoming</option>
          </select>
        </div>
      </div>
 
      <div className="filter-field">
        <label className="filter-label">Sort By:</label>
        <div className="select-wrap">
          <select value={filters.sortBy} onChange={e => onChange("sortBy", e.target.value)}>
            <option>Newest</option>
            <option>Oldest</option>
            <option>A–Z</option>
            <option>Duration</option>
          </select>
        </div>
      </div>
 
      <div className="filter-divider" />
 
      <label className="checkbox-row">
        <input type="checkbox" checked={filters.myOnly} onChange={e => onChange("myOnly", e.target.checked)} />
        <span>Show my workshops only</span>
      </label>
 
      <div className="filter-btns">
        <button className="btn btn-primary" onClick={onView}>
        <FaEye /> View
        </button>
        <button className="btn btn-secondary" onClick={onDownload}>
          <FaDownload /> Download
        </button>
      </div>
    </div>
     <div className="workshop-card">
      <div className="card-img-wrap">
        <img className="card-img" src={`https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80`} alt={workshop.title} loading="lazy" />
        <span className={`card-tag ${workshop.tagClass}`}>{workshop.tag}</span>
      </div>
      <div className="card-body">
        <div className="card-title">The workshops</div>
        <div className="card-meta">
          <div className="meta-item"><IoMdClock />3 Hours</div>
        </div>
        <button className="view-btn">View Details</button>
      </div>
    </div>
    </>
  );
}
export default FilterPanel;