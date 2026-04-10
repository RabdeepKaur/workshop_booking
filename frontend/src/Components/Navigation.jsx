const navItems = [
  { label: "Home",                     },
  { label: "Filter Workshop ",},
  { label: "Workshop Status", },
  { label: "Propose Workshop",  },
  { label: "All Workshop ",  },
];
 
function Sidebar({ isOpen, onClose, activeItem, onNavigate }) {
  return (
    <>
      {/* Mobile overlay */}
      <div className={`overlay ${isOpen ? "open" : ""}`} onClick={onClose} />
 
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
 
        {/* Brand header */}
        <div className="sidebar-brand">
          <div className="brand-text">
            <span className="brand-name">FOSSEE</span>
            <span className="brand-sub">Workspace</span>
          </div>
        </div>
 
        {/* User info */}
        <div className="sidebar-user">
          <div className="user-avatar">D</div>
          <div className="user-info">
            <div className="user-name">User</div>
          </div>
        </div>
 
        {/* Nav label */}
        <div className="nav-section-label"></div>
 
        {/* Nav items */}
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <div
              key={item.label}
              className={`sidebar-item${activeItem === item.label ? " active" : ""}`}
              onClick={() => { onNavigate(item.label); onClose(); }}
            >
              {/* <span className="sidebar-icon">{item.icon}</span> */}
              {item.label}
              {item.badge && <span className="item-badge">{item.badge}</span>}
            </div>
          ))}
        </nav>
 
        {/* Bottom utilities */}
        <div className="sidebar-bottom">
          <div className="sidebar-util">
            {/* <span className="sidebar-icon">{icons.help}</span> */}
            Help Center
          </div>
          <div className="sidebar-util">
            {/* <span className="sidebar-icon">{icons.logout}</span> */}
            Log Out
          </div>
        </div>
 
      </aside>
    </>
  );
}
export default Sidebar;