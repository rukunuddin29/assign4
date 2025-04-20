// Sidebar.jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md pt-16 flex flex-col justify-between py-4">
      <div>
        {/* Top section */}
        <div className="flex flex-col gap-2">
          <NavItem label="Platform Setup" to="/home" />
          <NavItem label="AI Agent" to="/aiagent" />
          <NavItem label="Dashboard" to="/dashboard" />
          <NavItem label="Campaign" to="/campaign" />
          <NavItem label="Promoters" to="/promoters" />
          <NavItem label="Leads" to="/leads" />
          <NavItem label="Payouts" to="/payouts" />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-2">
        <NavItem label="Settings" to="/settings" />
        <NavItem label="Help" to="/help" />
      </div>
    </div>
  );
};

const NavItem = ({ label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 cursor-pointer text-sm font-medium gap-3 ${
          isActive
            ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-600'
            : 'text-gray-700 hover:bg-blue-50'
        }`
      }
    >
      <span>{label}</span>
    </NavLink>
  );
};

export default Navbar;
