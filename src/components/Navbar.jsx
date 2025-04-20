
// Sidebar.jsx

const Navbar = () => {
    return (
      <div className="w-64 h-screen bg-white shadow-md pt-16 flex flex-col justify-between py-4">
        <div>
          {/* Top section */}
          <div className="flex flex-col gap-2">
            <NavItem label="Platform Setup" active />
            <NavItem label="AI Agent" />
            <NavItem label="Dashboard" />
            <NavItem label="Campaign" />
            <NavItem label="Promoters" />
            <NavItem label="Leads" />
            <NavItem label="Payouts" />
          </div>
        </div>
  
        {/* Bottom section */}
        <div className="flex flex-col gap-2">
          <NavItem label="Settings" />
          <NavItem label="Help" />
        </div>
      </div>
    );
  };
  
  const NavItem = ({ label, active }) => {
    return (
      <div
        className={`flex items-center px-4 py-3 cursor-pointer text-sm font-medium text-blue-600 gap-3 ${
          active ? 'bg-blue-100 border-l-4 border-blue-600 ' : 'hover:bg-blue-50'
        }`}
      >
        <span>{label}</span>
      </div>
    );
  };
  
  export default Navbar;
  
