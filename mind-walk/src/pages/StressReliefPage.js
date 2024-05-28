import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import pastalimage from '../images/pastal.jpg';
const StressReliefPage = () => {
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
      <img src={pastalimage}alt="Stress Icon" className="img-fluid rounded" />
    </div>
    <div className="col-md-6">
      <div className="text-center">
        <h3>Are You Experiencing Stress?</h3>
        <p>Stress is a common response to life's challenges, but it's important to recognize when it becomes overwhelming. Here are some signs that you may be experiencing stress:</p>
        <ul className="text-left">
          <li>Feeling overwhelmed or anxious</li>
          <li>Difficulty sleeping or changes in appetite</li>
          <li>Physical symptoms such as headaches or muscle tension</li>
          <li>Decreased concentration or irritability</li>
        </ul>
        <p>Understanding these signs can help you take proactive steps towards managing stress effectively.</p>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  </div>
</div>

   
      <div className="mb-4"></div>

   
      <div className="border border-secondary rounded p-4">
        <div className="text-center">
          <h3>What Is Stress?</h3>
          <p>Stress is a physiological and psychological response to perceived threats or challenges. It can manifest in various forms, including physical symptoms such as headaches or stomachaches, emotional symptoms such as anxiety or irritability, and behavioral symptoms such as changes in eating or sleeping patterns. Stress can result from various factors, including work or academic pressure, relationship issues, financial concerns, or major life events. Learning to recognize and manage stress effectively is essential for maintaining overall well-being.</p>
        </div>
      </div>

      <h2 className="text-center mt-4 mb-4">How To Manage Stress</h2>

      {/* Card Section */}
      <div className="row">
        {/* Guided Meditation and Breathing Exercises Card */}
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Journaling</Card.Title>
              <Card.Text>
                Incorporate journaling sessions to help users relax and reduce stress levels.
              </Card.Text>
              <Link to="/journaling" className="btn btn-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </div>

        {/* Exercise and Physical Activities Card */}
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Exercise</Card.Title>
              <Card.Text>
                Encourage users to engage in physical activities to boost mood and reduce stress.
              </Card.Text>
              <Link to="/exercise" className="btn btn-primary">Explore</Link>
            </Card.Body>
          </Card>
        </div>

        {/* Community and Support Card */}
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Community</Card.Title>
              <Card.Text>
                Join a community and express what you're going through in life. It can help you feel supported.
              </Card.Text>
              <Link to="/community" className="btn btn-primary">Discover</Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="text-center mt-5">
        <h3>Explore More Resources</h3>
        <p>Discover additional tools and resources to help you manage stress and improve your well-being.</p>
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

export default StressReliefPage;

