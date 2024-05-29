import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import mountain from '../images/mountain.jpg';
import { MainLayout } from "../components/MainLayout";

const PositiveSelfImagePage = () => {
  const [showModal, setShowModal] = useState({});

  const handleShow = (modal) => {
    setShowModal((prev) => ({ ...prev, [modal]: true }));
  };

  const handleClose = (modal) => {
    setShowModal((prev) => ({ ...prev, [modal]: false }));
  };

  return (
    <MainLayout>
      {/* Main Content */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={mountain} alt="Self-Image Improvement" className="img-fluid rounded mb-4" />
            <div className="border border-secondary rounded p-4 text-center">
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
                <Button variant="primary" onClick={() => handleShow('selfReflection')}>Learn More</Button>
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
                <Button variant="primary" onClick={() => handleShow('positiveAffirmations')}>Explore</Button>
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
                <Button variant="primary" onClick={() => handleShow('seekSupport')}>Discover</Button>
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

      {/* Modals */}
      <Modal show={showModal.selfReflection} onHide={() => handleClose('selfReflection')}>
        <Modal.Header closeButton>
          <Modal.Title>Self-Reflection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Engage in self-reflection to identify and challenge negative beliefs about yourself.</p>
          <p>Here are some exercises you can try:</p>
          <ul>
            <li>Write down negative thoughts and challenge them with positive alternatives.</li>
            <li>Keep a daily journal to reflect on your achievements and strengths.</li>
            <li>Practice mindfulness meditation to become more aware of your thoughts and feelings.</li>
          </ul>
          <form>
            <div className="form-group">
              <label htmlFor="reflection">Write your reflection:</label>
              <textarea className="form-control" id="reflection" rows="3"></textarea>
            </div>
            <Button variant="primary" type="submit">Submit</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('selfReflection')}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.positiveAffirmations} onHide={() => handleClose('positiveAffirmations')}>
        <Modal.Header closeButton>
          <Modal.Title>Positive Affirmations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Practice positive affirmations to cultivate self-love and acceptance.</p>
          <p>Here are some affirmations you can use:</p>
          <ul>
            <li>I am worthy of love and respect.</li>
            <li>I am strong and capable.</li>
            <li>I believe in myself and my abilities.</li>
          </ul>
          <p>Try saying these affirmations daily in front of a mirror.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('positiveAffirmations')}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.seekSupport} onHide={() => handleClose('seekSupport')}>
        <Modal.Header closeButton>
          <Modal.Title>Seek Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Reach out to friends, family, or a therapist for encouragement and guidance.</p>
          <p>Here are some steps you can take:</p>
          <ul>
            <li>Talk to a trusted friend or family member about your feelings.</li>
            <li>Join a support group or community.</li>
            <li>Schedule an appointment with a therapist or counselor.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('seekSupport')}>Close</Button>
        </Modal.Footer>
      </Modal>
    </MainLayout>
  );
};

export default PositiveSelfImagePage;

