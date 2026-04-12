import {NavLink} from "react-router-dom"
import { IoMdClose } from "react-icons/io";
const navItems = [
  { label: "Home",  path:"/" ,},  
  { label: "Filter Workshop " ,path:"/catalog",},
  { label: "Workshop Status",  path:"/status"},
  { label: "Propose Workshop", path:"/propose" },
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
   <button
    className="close-btn"
    onClick={onClose}
    aria-label="Close navigation menu"
    style={{position:"right"}}
  >
    <IoMdClose />
  </button>

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
    <NavLink
      key={item.label}
      to={item.path}
      className={({ isActive }) =>
        `sidebar-item${isActive ? " active" : ""}`
      }
      onClick={onClose}  
    >
      {item.label}
      {item.badge && <span className="item-badge">{item.badge}</span>}
    </NavLink>
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