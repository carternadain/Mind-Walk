import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Modal, Collapse } from 'react-bootstrap';
import pastelcloud from '../images/pastelcloud.JPG';
import { MainLayout } from "../components/MainLayout";
import { animateScroll as scroll } from 'react-scroll';

const PressureManagementPage = () => {
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [showTimeManagementModal, setShowTimeManagementModal] = useState(false);
  const [showStressReductionModal, setShowStressReductionModal] = useState(false);
  const [showSettingBoundariesModal, setShowSettingBoundariesModal] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleLearnMoreClick = () => {
    scroll.scrollTo(800);
  };

  const handleToggleCollapse = () => setCollapseOpen(!collapseOpen);

  return (
    <MainLayout>
      <div className="container mt-4">
        <div className="container p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={pastelcloud} alt="Stress Icon" className="img-fluid rounded" />
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
                <Button variant="dark" onClick={handleLearnMoreClick}>Learn More</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4"></div>
        <div className="border border-secondary rounded p-4">
          <div className="text-center">
            <h3 onClick={handleToggleCollapse} style={{ cursor: 'pointer' }}>
              Understanding Pressure {collapseOpen ? '▲' : '▼'}
            </h3>
            <Collapse in={collapseOpen}>
              <div>
                <p>Pressure is the result of external demands or expectations placed upon you. It can come from various sources, such as work, school, relationships, or personal goals. When pressure becomes excessive or unmanageable, it can lead to stress, anxiety, and other negative outcomes. Learning to identify the sources of pressure in your life and developing effective coping strategies is essential for maintaining your mental and emotional well-being.</p>
              </div>
            </Collapse>
          </div>
        </div>

        <h2 className="text-center mt-4 mb-4">How To Manage Pressure</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Time Management</Card.Title>
                <Card.Text>
                  Improve time management skills to prioritize tasks and reduce feelings of overwhelm.
                </Card.Text>
                <Button variant="dark" onClick={() => setShowTimeManagementModal(true)}>Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Stress Reduction Techniques</Card.Title>
                <Card.Text>
                  Practice stress reduction techniques such as mindfulness and deep breathing exercises.
                </Card.Text>
                <Button variant="dark" onClick={() => setShowStressReductionModal(true)}>Explore</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Setting Boundaries</Card.Title>
                <Card.Text>
                  Establish clear boundaries to manage expectations and reduce pressure from others.
                </Card.Text>
                <Button variant="dark" onClick={() => setShowSettingBoundariesModal(true)}>Discover</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="text-center mt-5">
          <h3>Explore More Resources</h3>
          <p>Discover additional tools and resources to help you manage pressure and thrive in challenging situations.</p>
          <Button variant="dark" onClick={() => setShowGeneralModal(true)}>View All Resources</Button>
        </div>

        {/* General Modal for additional resources */}
        <Modal show={showGeneralModal} onHide={() => setShowGeneralModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Additional Resources</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Here are some more resources to help you manage pressure:</p>
            <ul>
              <li><Link to="/resource-1">Resource 1</Link></li>
              <li><Link to="/resource-2">Resource 2</Link></li>
              <li><Link to="/resource-3">Resource 3</Link></li>
              <li><Link to="/resource-4">Resource 4</Link></li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowGeneralModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Time Management Modal */}
        <Modal show={showTimeManagementModal} onHide={() => setShowTimeManagementModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Time Management</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Time management is essential for reducing feelings of overwhelm. Here are some strategies:</p>
            <ul>
              <li>Prioritize tasks based on importance and urgency.</li>
              <li>Break large tasks into smaller, manageable steps.</li>
              <li>Use tools like calendars and to-do lists to stay organized.</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowTimeManagementModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Stress Reduction Modal */}
        <Modal show={showStressReductionModal} onHide={() => setShowStressReductionModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Stress Reduction Techniques</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Practice these techniques to reduce stress:</p>
            <ul>
              <li>Mindfulness meditation.</li>
              <li>Deep breathing exercises.</li>
              <li>Progressive muscle relaxation.</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowStressReductionModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Setting Boundaries Modal */}
        <Modal show={showSettingBoundariesModal} onHide={() => setShowSettingBoundariesModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Setting Boundaries</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Establish clear boundaries to manage expectations:</p>
            <ul>
              <li>Communicate your limits to others.</li>
              <li>Learn to say no when necessary.</li>
              <li>Take time for yourself to recharge.</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSettingBoundariesModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </MainLayout>
  );
};

export default PressureManagementPage;
