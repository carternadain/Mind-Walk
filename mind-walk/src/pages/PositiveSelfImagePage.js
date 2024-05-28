import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import mountain from '../images/mountain.jpg'; // Change the image source

const PostiveSelfImage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-">
        <Link className="mindwalk-text navbar-brand" to="/">
          Mind Walk
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-centered" to="/stress-relief">Stress</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-centered" to="/pressure-management">Pressure</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-centered" to="/self-image-improvement">Self-Image</Link>
            </li>
          </ul>
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

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row justify-content-center"> {/* Center the column */}
          <div className="col-md-6">
            <img src={mountain} alt="Self-Image Improvement" className="img-fluid rounded mb-4" />
            <div className="border border-secondary rounded p-4 text-center"> {/* Center the text */}
              <h3>Understanding Self-Image</h3>
              <p>Your self-image is how you perceive yourself, including your thoughts, beliefs, and feelings about your appearance, abilities, and worth. It influences your behavior, interactions with others, and overall quality of life. Developing a positive self-image involves challenging negative thoughts, practicing self-compassion, and embracing your uniqueness.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container p-4">
              <div className="text-center">
                <h3>Enhance Your Self-Image</h3>
                <p>Improving your self-image is essential for overall well-being and confidence. Here are some signs that you may need to enhance your self-image:</p>
                <ul className="text-left">
                  <li>Low self-esteem or self-worth</li>
                  <li>Negative self-talk or self-criticism</li>
                  <li>Comparing yourself unfavorably to others</li>
                  <li>Avoidance of social situations due to insecurity</li>
                </ul>
                <p>Investing in your self-image can lead to greater happiness and success.</p>
                <Button variant="primary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center mt-4 mb-4">Ways To Improve Self-Image</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Self-Reflection</Card.Title>
                <Card.Text>
                  Engage in self-reflection to identify and challenge negative beliefs about yourself.
                </Card.Text>
                <Link to="/self-reflection" className="btn btn-primary">Learn More</Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Positive Affirmations</Card.Title>
                <Card.Text>
                  Practice positive affirmations to cultivate self-love and acceptance.
                </Card.Text>
                <Link to="/positive-affirmations" className="btn btn-primary">Explore</Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Seek Support</Card.Title>
                <Card.Text>
                  Reach out to friends, family, or a therapist for encouragement and guidance.
                </Card.Text>
                <Link to="/seek-support" className="btn btn-primary">Discover</Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3>Explore More Resources</h3>
          <p>Discover additional tools and resources to help you enhance your self-image and embrace your true self.</p>
          <Button variant="outline-primary">View All Resources</Button>
        </div>
      </div>

      <footer className="text-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark mx-2">Help and support</a></li>
                <li><a href="#" className="text-dark mx-2">About us</a></li>
                <li><a href="#" className="text-dark mx-2">Accessibility statement</a></li>
                <li><a href="#" className="text-dark mx-2">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-6 text-right">
              <i className="mx-2 bi bi-arrow-clockwise"></i>
              <i className="mx-2 bi bi-camera"></i>
              <i className="mx-2 bi bi-chat-dots"></i>
              <i className="mx-2 bi bi-cart2"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PostiveSelfImage;
