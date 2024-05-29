import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import pastelcloud from '/Users/carternadain/Desktop/Mind-Walk/mind-walk/src/images/pastelcloud.JPG';
const PressureManagementpage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-">
        {/* Mind Walk logo/text on the left */}
        <Link className="mindwalk-text navbar-brand" to="/">
          Mind Walk
        </Link>
    
        {/* Toggler button for mobile view */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        {/* Links and form */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* Links for stress relief, pressure management, and positive self-image */}
            <li className="nav-item">
              <Link className="nav-link text-centered" to="/stress-relief">Stress</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-centered" to="/pressure-management">Pressure</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-centered" to="/positive-self-image">Self-Image</Link>
            </li>
          </ul>
    
          {/* Login and Get Started buttons on the right */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get-started">Get Started</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
  
      <div className="container p-4 mb-4">
  <div className="row align-items-center">
    <div className="col-md-6">
      <img src={pastelcloud}alt="Stress Icon" className="img-fluid rounded" />
    </div>
    <div className="col-md-6">
      <div className="text-center">
      <h3>Feeling Overwhelmed by Pressure?</h3>
      <p>Pressure can be intense and overwhelming, but understanding how to manage it effectively is crucial for your well-being. Here are some signs that you may be experiencing pressure:</p>
        <ul className="text-left">
        <li>Feeling constantly stressed or anxious</li>
                <li>Difficulty concentrating or making decisions</li>
                <li>Physical symptoms such as tension headaches or stomach issues</li>
                <li>Changes in mood or irritability</li>
        </ul>
        <p>Recognizing these signs is the first step towards managing pressure in a healthy way.</p>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  </div>
</div>

   
      <div className="mb-4"></div>

   
      <div className="border border-secondary rounded p-4">
        <div className="text-center">
        <h3>Understanding Pressure</h3>
          <p>Pressure is the result of external demands or expectations placed upon you. It can come from various sources, such as work, school, relationships, or personal goals. When pressure becomes excessive or unmanageable, it can lead to stress, anxiety, and other negative outcomes. Learning to identify the sources of pressure in your life and developing effective coping strategies is essential for maintaining your mental and emotional well-being.</p>
        </div>
      </div>

      <h2 className="text-center mt-4 mb-4">How To Manage Pressure</h2>

      <div className="row">
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Time Management</Card.Title>
              <Card.Text>
                Improve time management skills to prioritize tasks and reduce feelings of overwhelm.
              </Card.Text>
              <Link to="/time-management" className="btn btn-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Stress Reduction Techniques</Card.Title>
              <Card.Text>
                Practice stress reduction techniques such as mindfulness and deep breathing exercises.
              </Card.Text>
              <Link to="/stress-reduction" className="btn btn-primary">Explore</Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Setting Boundaries</Card.Title>
              <Card.Text>
                Establish clear boundaries to manage expectations and reduce pressure from others.
              </Card.Text>
              <Link to="/setting-boundaries" className="btn btn-primary">Discover</Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="text-center mt-5">
        <h3>Explore More Resources</h3>
        <p>Discover additional tools and resources to help you manage pressure and thrive in challenging situations.</p>
        <Button variant="outline-primary">View All Resources</Button>
      </div>
    </div>

  

      {/* Footer Section */}
      <footer className="text-dark py-4">
        <div className="container">
          <div className="row">
            {/* Left side with unordered list */}
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark mx-2">Help and support</a></li>
                <li><a href="#" className="text-dark mx-2">About us</a></li>
                <li><a href="#" className="text-dark mx-2">Accessibility statement</a></li>
                <li><a href="#" className="text-dark mx-2">Contact</a></li>
              </ul>
            </div>

            {/* Right side with social media icons */}
            <div className="col-md-6 text-right">
              <i class="mx-2 bi bi-arrow-clockwise"></i>
              <i class="mx-2 bi bi-camera"></i>
              <i class="mx-2 bi bi-chat-dots"></i>
              <i class="mx-2 bi bi-cart2"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PressureManagementpage;

