import { useState } from "react";
import FilterPanel from "../Components/Filter";
import "../Styles/WorkshopStats.css";

const WORKSHOPS = [
  {
    id: 1,
    title: "Advanced Qualitative Methodology & Analysis",
    tag: "Research", tagClass: "tag-research",
    duration: "4 Hours", level: "Advanced",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
  },
  {
    id: 2,
    title: "Inclusive Classroom Strategies for Higher Ed",
    tag: "Pedagogy", tagClass: "tag-pedagogy",
    duration: "2 Hours", level: "Intermediate",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: 3,
    title: "AI Tools for Bibliographic Management",
    tag: "Technology", tagClass: "tag-technology",
    duration: "90 Mins", level: "Introductory",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    id: 4,
    title: "Data Visualization for Social Research",
    tag: "Analytics", tagClass: "tag-analytics",
    duration: "3 Hours", level: "Intermediate",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

function WorkshopStats() {
  const [filters, setFilters] = useState({
    fromDate: "", toDate: "", workshop: "", state: "", sortBy: "Newest", myOnly: false,
  });
  const [activeFilters, setActiveFilters] = useState(null);
 
  const handleChange = (key, val) => setFilters(f => ({ ...f, [key]: val }));
  const handleClear  = () => setFilters({ fromDate: "", toDate: "", workshop: "", state: "", sortBy: "Newest", myOnly: false });
  const handleView   = () => setActiveFilters({ ...filters });
 
  const displayed = (() => {
    let list = [...WORKSHOPS];
    if (activeFilters?.workshop) list = list.filter(w => String(w.id) === activeFilters.workshop);
    if (activeFilters?.sortBy === "A–Z") list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  })();
 
  return (
    <>
      <div className="page">
 
        {/* Hero */}
        <div className="page-hero">
          <h1>All Workshops</h1>
          <p>Filter and discover workshops that match your interests and according to your schedule.</p>
        </div>
 
        {/* Filters + Cards */}
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