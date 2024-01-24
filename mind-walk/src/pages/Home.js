import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
          {/* // links are wrong correct the names */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stress-relief">Stress Relief</Link></li>
        <li><Link to="/pressure-management">Pressure Management</Link></li>
        <li><Link to="/positive-self-image">Positive Self-Image</Link></li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
