

function Sidebar({ isOpen, onClose }) {
  const nav = [
    { label: "Home",  active: true },
    { label: "Workshop Statistics",  },
    { label: "Workshop Status",  },
    { label: "Propose Workshop",  },
    { label: "Workshop Types", },
  ];
  return (
    <>
      <div className={`overlay ${isOpen ? "open" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
          {nav.map(item => (
            <div key={item.label} className={`sidebar-item ${item.active ? "active" : ""}`}>
              {item.label}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-util"> Help Center</div>
          <div className="sidebar-util"> Log Out</div>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;