import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import snowrock from '../images/snowrock.JPG';
import { MainLayout } from "../components/MainLayout";

const StressReliefPage = () => {
  const [showModal, setShowModal] = useState({});
  const [formData, setFormData] = useState({ stressLevel: '', journalEntry: '' });
  const [quizAnswers, setQuizAnswers] = useState({ question1: '', question2: '', question3: '' });
  const [quizResult, setQuizResult] = useState('');

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

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuizAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const { question1, question2, question3 } = quizAnswers;
    // Simple logic to determine quiz result based on answers
    if (question1 === 'often' && question2 === 'often' && question3 === 'often') {
      setQuizResult('You might be experiencing high levels of stress. Consider talking to a professional.');
    } else if (question1 === 'sometimes' || question2 === 'sometimes' || question3 === 'sometimes') {
      setQuizResult('You are experiencing some stress. Try incorporating stress management techniques into your routine.');
    } else {
      setQuizResult('You seem to have a low level of stress. Keep up the good work!');
    }
    handleShow('quizResult');
  };

  return (
    <MainLayout>
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
                <Button variant="btn btn-dark" onClick={() => handleShow('stressInfo')}>Learn More</Button>
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
                <Button variant="btn btn-dark" onClick={() => handleShow('journaling')}>Learn More</Button>
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
                <Button variant="btn btn-dark" onClick={() => handleShow('exercise')}>Explore</Button>
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
                <Button variant="btn btn-dark" onClick={() => handleShow('community')}>Discover</Button>
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
          <Button variant="btn btn-dark" onClick={() => handleClose('stressInfo')}>Close</Button>
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
          <Button variant="btn btn-dark" onClick={() => handleClose('journaling')}>Close</Button>
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
          <Button variant="btn btn-dark" onClick={() => handleClose('exercise')}>Close</Button>
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
          <Button variant="btn btn-dark" onClick={() => handleClose('community')}>Close</Button>
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
          <Button variant="btn btn-dark" onClick={() => handleClose('resources')}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.quiz} onHide={() => handleClose('quiz')}>
        <Modal.Header closeButton>
          <Modal.Title>Stress Management Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleQuizSubmit}>
            <Form.Group controlId="question1">
              <Form.Label>How often do you feel overwhelmed by your responsibilities?</Form.Label>
              <Form.Control as="select" name="question1" value={quizAnswers.question1} onChange={handleQuizChange}>
                <option value="">Select an option</option>
                <option value="often">Often</option>
                <option value="sometimes">Sometimes</option>
                <option value="rarely">Rarely</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="question2">
              <Form.Label>How often do you experience physical symptoms of stress (e.g., headaches, muscle tension)?</Form.Label>
              <Form.Control as="select" name="question2" value={quizAnswers.question2} onChange={handleQuizChange}>
                <option value="">Select an option</option>
                <option value="often">Often</option>
                <option value="sometimes">Sometimes</option>
                <option value="rarely">Rarely</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="question3">
              <Form.Label>How often do you find it difficult to concentrate due to stress?</Form.Label>
              <Form.Control as="select" name="question3" value={quizAnswers.question3} onChange={handleQuizChange}>
                <option value="">Select an option</option>
                <option value="often">Often</option>
                <option value="sometimes">Sometimes</option>
                <option value="rarely">Rarely</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-dark" onClick={() => handleClose('quiz')}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Quiz Result Modal */}
      <Modal show={showModal.quizResult} onHide={() => handleClose('quizResult')}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{quizResult}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-dark" onClick={() => handleClose('quizResult')}>Close</Button>
        </Modal.Footer>
      </Modal>
    </MainLayout>
  );
};

export default StressReliefPage;
