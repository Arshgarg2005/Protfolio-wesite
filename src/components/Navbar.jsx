import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/research', label: 'Research' },
    { path: '/leadership', label: 'Leadership' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', borderColor: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Link to="/" className="text-base font-bold transition-colors" style={{ color: '#f1f5f9' }}>
            Arsh 
          </Link>
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-gray-900'
                    : 'hover:opacity-80'
                }`}
                style={{
                  backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                  color: location.pathname === item.path ? '#f1f5f9' : '#64748b',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
