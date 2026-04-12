import "../Styles/WorkShopStatus.css";
import { Helmet } from "react-helmet-async";
function YourProposals() {
  const statusClass  = { "Under Review": "review", "Pending": "pending", "Accepted": "accepted" };
  const borderClass  = { "Under Review": "status-review", "Pending": "status-pending", "Accepted": "status-accepted" };
  const proposals = [
    { title: "Workshop on AI in Education", date: "2026-01-01", status: "Under Review" },
    { title: "Data Science for Beginners", date: "2026-01-15", status: "Pending" },
    { title: "Effective Teaching Strategies", date: "2026-01-20", status: "Accepted" },
  ];
  return (
    <>
     <Helmet>
        <title>Proposals Status | FOSSEE Workshop Booking</title>
        <meta
          name="description"
          content="Check the status of your workshop proposals at FOSSEE, IIT Bombay. Choose your topic, category, and preferred date."
        />
        <meta property="og:title" content="Proposals Status | FOSSEE" />
        <meta
          property="og:description"
          content="Check the status of your workshop proposals at FOSSEE, IIT Bombay."
        />
        <link rel="canonical" href="https://workshop.fossee.in/status" />
      </Helmet>
    <div className="proposals-panel">
      <div style={{paddingTop:"42px"}} className="proposals-panel-header">
        <h3>Your Proposals</h3>
        <div className="live-badge"><div className="live-dot" />Live Status</div>
      </div>
      {proposals.map((p, i) => (
        <div key={i} className={"proposal-item " + (borderClass[p.status] || "")}>
          <div className="proposal-item-top">
            <div>
              <div className="proposal-item-title">{p.title}</div>
              <div className="proposal-item-date">Submitted {p.date}</div>
            </div>
            <span className={"status-badge " + (statusClass[p.status] || "")}>{p.status}</span>
          </div>
        </div>
      ))}
      <a className="view-history">
        View Full History
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    </>
  );
}

export default YourProposals;