import React from 'react';
import { Link } from 'react-router-dom';

const PressureManagementPage = () => {
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

      {/* Header with title "Pressure Management" centered */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center">How To Manage Pressure </h2>
          </div>
        </div>

        {/* Existing paragraph */}
        <div className="row">
          <div className="col">
            <p className="text-center">To effectively manage pressure, it's essential to first acknowledge and accept the existence of stressors. Next, prioritize tasks based on urgency and importance, breaking them down into smaller, manageable steps. Setting realistic goals and deadlines can help alleviate the feeling of being overwhelmed. Additionally, practicing mindfulness techniques, such as deep breathing or meditation, can provide a sense of calm and clarity in challenging situations. Seeking support from peers or mentors and maintaining open communication about difficulties can also lighten the burden of pressure. Finally, remember to take breaks, engage in activities you enjoy, and prioritize self-care to maintain overall well-being during times of pressure.</p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="row">
          {/* Guided Meditation and Breathing Exercises Card */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Guided Meditation and Breathing Exercises</h5>
                <p className="card-text">Provide users with audio or video sessions for relaxation, deep breathing, and mindfulness practices to help them calm their minds during stressful moments.</p>
                {/* You can add an image here */}
              </div>
            </div>
          </div>

          {/* Goal Setting and Tracking Card */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Goal Setting and Tracking</h5>
                <p className="card-text">Allow users to set achievable goals related to managing pressure, such as completing tasks on time or taking regular breaks, and track their progress over time.</p>
                {/* You can add an image here */}
              </div>
            </div>
          </div>

          {/* Stress Assessment Tools Card */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Stress Assessment Tools</h5>
                <p className="card-text">Include interactive quizzes or surveys to help users identify their stress triggers and levels, providing personalized recommendations based on their responses.</p>
                {/* You can add an image here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Paragraphs */}
      <div className="container">
        {/* First Additional Paragraph */}
        <div className="row">
          <div className="col">
            <p>To enhance pressure management, integrating mindfulness exercises into your routine can be highly beneficial. Mindfulness practices, such as focused breathing or body scans, encourage individuals to stay present and aware of their thoughts and sensations. By incorporating these exercises into their daily lives, users can cultivate a greater sense of calm and resilience in the face of stressors, allowing them to respond to challenges with clarity and composure.</p>
          </div>
        </div>

        {/* Second Additional Paragraph */}
        <div className="row">
          <div className="col">
            <p>Implementing coping strategies within your app can empower users to navigate pressure-filled situations effectively. Coping strategies, such as relaxation techniques or cognitive reframing, provide individuals with practical tools to manage their emotional responses and regulate stress levels. By learning and applying these strategies, users can develop a greater sense of control over their reactions to stressors, ultimately enhancing their overall well-being and resilience.</p>
          </div>
        </div>

        {/* Third Additional Paragraph */}
        <div className="row">
          <div className="col">
            <p>Promoting healthy habits is essential for fostering long-term resilience and well-being. Encourage users to prioritize self-care practices, such as regular exercise, sufficient sleep, and nutritious eating habits, as part of their pressure management routine. By nurturing their physical health, users can boost their resilience to stress, improve their mood, and enhance their overall quality of life, allowing them to navigate challenges with greater ease and vitality.</p>
          </div>
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

export default PressureManagementPage;
