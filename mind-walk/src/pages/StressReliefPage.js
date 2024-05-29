import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import snowrock from '/Users/carternadain/Desktop/Mind-Walk/mind-walk/src/images/snowrock.JPG';

const StressReliefPage = () => {
  const [showModal, setShowModal] = useState({});
  const [formData, setFormData] = useState({ stressLevel: '', journalEntry: '' });

  const handleShow = (modal) => {
    setShowModal((prev) => ({ ...prev, [modal]: true }));
  };

  const handleClose = (modal) => {
    setShowModal((prev) => ({ ...prev, [modal]: false }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

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
              <Link className="nav-link text-centered" to="/positive-self-image">Self-Image</Link>
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
      
      <div className="container mt-4">
        <div className="container p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={snowrock} alt="Snowrock" className="img-fluid rounded" />
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
                <Button variant="primary" onClick={() => handleShow('stressInfo')}>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border border-secondary rounded p-4">
          <div className="text-center">
            <h3>What Is Stress?</h3>
            <p>Stress is a physiological and psychological response to perceived threats or challenges. It can manifest in various forms, including physical symptoms such as headaches or stomachaches, emotional symptoms such as anxiety or irritability, and behavioral symptoms such as changes in eating or sleeping patterns. Stress can result from various factors, including work or academic pressure, relationship issues, financial concerns, or major life events. Learning to recognize and manage stress effectively is essential for maintaining overall well-being.</p>
          </div>
        </div>

        <h2 className="text-center mt-4 mb-4">How To Manage Stress</h2>

        {/* Card Section */}
        <div className="row">
          {/* Journaling Card */}
          <div className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Journaling</Card.Title>
                <Card.Text>
                  Incorporate journaling sessions to help users relax and reduce stress levels.
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow('journaling')}>Learn More</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Exercise Card */}
          <div className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Exercise</Card.Title>
                <Card.Text>
                  Encourage users to engage in physical activities to boost mood and reduce stress.
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow('exercise')}>Explore</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Community Card */}
          <div className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Community</Card.Title>
                <Card.Text>
                  Join a community and express what you're going through in life. It can help you feel supported.
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow('community')}>Discover</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="text-center mt-5">
          <h3>Explore More Resources</h3>
          <p>Discover additional tools and resources to help you manage stress and improve your well-being.</p>
          <Button variant="outline-primary" onClick={() => handleShow('resources')}>View All Resources</Button>
        </div>
      </div>

      {/* Modals */}
      <Modal show={showModal.stressInfo} onHide={() => handleClose('stressInfo')}>
        <Modal.Header closeButton>
          <Modal.Title>Understanding Stress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Here is more detailed information about stress and how it affects your body and mind.</p>
          <p>Stress is a natural response to perceived threats. It can be managed through various techniques such as:</p>
          <ul>
            <li>Mindfulness and meditation</li>
            <li>Regular exercise</li>
            <li>Healthy eating habits</li>
            <li>Connecting with loved ones</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('stressInfo')}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.journaling} onHide={() => handleClose('journaling')}>
        <Modal.Header closeButton>
          <Modal.Title>Journaling for Stress Relief</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Journaling is a great way to process your thoughts and emotions. Try writing down your thoughts each day.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="journalEntry">
              <Form.Label>Write your journal entry:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="journalEntry"
                value={formData.journalEntry}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('journaling')}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.exercise} onHide={() => handleClose('exercise')}>
        <Modal.Header closeButton>
          <Modal.Title>Exercise for Stress Management</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Regular exercise is an effective way to manage stress. Try incorporating the following activities into your routine:</p>
          <ul>
            <li>Walking or jogging</li>
            <li>Yoga or stretching exercises</li>
            <li>Strength training</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('exercise')}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.community} onHide={() => handleClose('community')}>
        <Modal.Header closeButton>
          <Modal.Title>Join a Community</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Connecting with others can help you feel supported and understood. Consider joining a community or support group.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('community')}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.resources} onHide={() => handleClose('resources')}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Resources</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Explore more resources for managing stress:</p>
          <ul>
            <li><Link to="/guided-meditation">Guided Meditation</Link></li>
            <li><Link to="/breathing-exercises">Breathing Exercises</Link></li>
            <li><Link to="/mental-health-professionals">Mental Health Professionals</Link></li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('resources')}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Footer Section */}
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

export default StressReliefPage;
