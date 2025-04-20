import Sidebar from './sidebar';
import TopNavbar from './TopNavbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Right content: TopNavbar + Page Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* TopNavbar */}
        <TopNavbar />

        {/* Page Content (SetupForm) */}
        <div className="flex-1 overflow-y-auto p-6 pt-20 bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
