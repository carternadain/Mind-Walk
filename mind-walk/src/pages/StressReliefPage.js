import React from 'react';
import { Link } from 'react-router-dom';

const stressreliefpage = () => {
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
            <h2 className="text-center">How To Manage Stress </h2>
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
                <h5 className="card-title">Journaling</h5>
                <p className="card-text">Provide users with audio or video sessions for relaxation, deep breathing, and mindfulness practices to help them calm their minds during stressful moments.</p>
                {/* You can add an image here */}
              </div>
            </div>
          </div>

          {/* Goal Setting and Tracking Card */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Exercises</h5>
                <p className="card-text">Allow users to set achievable goals related to managing pressure, such as completing tasks on time or taking regular breaks, and track their progress over time.</p>
                {/* You can add an image here */}
              </div>
            </div>
          </div>

          {/* Stress Assessment Tools Card */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Community</h5>
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
            <p>Journaling can be a powerful tool for managing stress by providing a structured outlet for processing emotions and thoughts. By putting pen to paper (or fingers to keyboard), individuals can explore their feelings, identify triggers, and track patterns of stress over time. Writing down worries and concerns can help to declutter the mind and gain perspective on challenges. Additionally, journaling allows for reflection on positive experiences and gratitude, fostering a more balanced outlook. Over time, this practice can lead to increased self-awareness, resilience, and a sense of control over stressors.</p>
          </div>
        </div>

        {/* Second Additional Paragraph */}
        <div className="row">
          <div className="col">
            <p>Regular exercise is a cornerstone of stress management, offering both physical and mental benefits. Physical activity releases endorphins, neurotransmitters that act as natural mood lifters, promoting feelings of well-being and reducing stress levels. Engaging in exercise also helps to alleviate muscle tension and promotes relaxation, countering the physiological effects of stress on the body. Moreover, exercise provides a distraction from stressors, offering a break from rumination and worry. Whether it's a brisk walk, a yoga session, or a gym workout, incorporating regular exercise into one's routine can significantly enhance resilience to stress.</p>
          </div>
        </div>

        {/* Third Additional Paragraph */}
        <div className="row">
          <div className="col">
            <p>Building and maintaining connections within a supportive community can be instrumental in coping with stress. Whether it's friends, family, colleagues, or like-minded individuals, having a network of supportive relationships provides a sense of belonging and emotional support. Sharing experiences, seeking advice, and offering assistance within a community can help individuals feel understood, validated, and less alone in their struggles. Additionally, participating in group activities or volunteering can foster a sense of purpose and fulfillment, distracting from stressors and promoting positive emotions. Cultivating meaningful connections and a sense of community can buffer against the negative effects of stress and contribute to overall well-being.</p>
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

export default stressreliefpage;
