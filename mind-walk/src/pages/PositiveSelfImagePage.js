import React from 'react';
import { Link } from 'react-router-dom';


const PositiveSelfImagePage = () => {
  return (
    <div>
    {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-">
      <a className="navbar-brand" href="#">
        Mind Walk
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li>
            <form className="form-inline my-2 my-lg-0">
              <div className="input-group">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                  {/* <button className="btn btn-outline-success" type="submit">
                    <BiSearch /> {/* Using Bootstrap icon */}
                  {/* </button> */}
                </div>
              </div>
            </form>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cta">Register</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">Home</Link>
              <Link className="dropdown-item" to="/stress-relief">Stress Relief</Link>
              <Link className="dropdown-item" to="/pressure-management">Pressure Management</Link>
              <Link className="dropdown-item" to="/positive-self-image">Positive Self-Image</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

       {/* Header with title "Pressure Management" centered */}
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text-center">PositiveSelfImagePage</h2>
        </div>
      </div>
 

<div className="row">
  <div className="col">
<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
  </div>
    </div>
    </div>
      </div>

);

};

export default PositiveSelfImagePage;
