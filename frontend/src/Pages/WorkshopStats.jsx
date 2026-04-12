import { useState } from "react";
import FilterPanel from "../Components/Filter";
import "../Styles/WorkshopStats.css";
import { Helmet } from "react-helmet-async";
function WorkshopStats() {
  const [filters, setFilters] = useState({
    fromDate: "", toDate: "", workshop: "", state: "", sortBy: "Newest", myOnly: false,
  });
  const [activeFilters, setActiveFilters] = useState(null);
 
  const handleChange = (key, val) => setFilters(f => ({ ...f, [key]: val }));
  const handleClear  = () => setFilters({ fromDate: "", toDate: "", workshop: "", state: "", sortBy: "Newest", myOnly: false });
  const handleView   = () => setActiveFilters({ ...filters });
 
 
  return (
    <>
     <Helmet>
        <title>All Workshops | FOSSEE Workshop Booking</title>
        <meta
          name="description"
          content="Browse and filter free workshops on Python, simulation, and engineering tools offered by FOSSEE, IIT Bombay."
        />
        <meta property="og:title" content="All Workshops | FOSSEE Workshop Booking" />
        <meta
          property="og:description"
          content="Browse and filter free workshops on Python, simulation, and engineering tools offered by FOSSEE, IIT Bombay."
        />
        <link rel="canonical" href="https://workshop.fossee.in/catalog" />
      </Helmet>
      <div className="page">
        <div className="page-hero">
          <h1>All Workshops</h1>
          <p>Filter and discover workshops that match your interests and according to your schedule.</p>
        </div>
        <div className="catalog-layout">
          {/* Left: filters */}
          <FilterPanel
            filters={filters}
            onChange={handleChange}
            onClear={handleClear}
            onView={handleView}
            onDownload={() => alert("Downloading report…")}
          />
 </div>
 
      </div>
    </>
  );
}
export default WorkshopStats;