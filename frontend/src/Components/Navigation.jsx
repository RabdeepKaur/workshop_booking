import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../Styles/HomeStyle.css";

function Navbar({ onToggleSidebar }) {
  const tabs = [ "Home","Workshop Statistics", "Workshop Status", "  Propose Workshop", "   Workshop Types"];
  const [active, setActive] = useState("Home");
  return (
    <nav className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">
        <RxHamburgerMenu />
        </button>
        <div className="nav-logo">
          FOSSEE
          <span>Workspace</span>
        </div>
      </div>
      <div className="nav-links">
        {tabs.map(t => (
          <a key={t} className={active === t ? "active" : ""} onClick={() => setActive(t)}>{t}</a>
        ))}
      </div>
      <div className="nav-right">
        <div className="nav-avatar">D</div>
      </div>
    </nav>
  );
}

export default Navbar;