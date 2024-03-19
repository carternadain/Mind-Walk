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
            {/* Navigation items */}
            {/* Login */}
            <li className="nav-item">
              <a className="nav-link" href="#features">Login</a>
            </li>
            {/* Register */}
            <li className="nav-item">
              <a className="nav-link" href="#cta">Register</a>
            </li>
            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              {/* Dropdown menu */}
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
            <h2 className="text-center">How To Maintain A Positive Self Image </h2>
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
                <h5 className="card-title">Positive Affirmations</h5>
                <p className="card-text"> Incorporating positive affirmations into daily routines can help reframe negative self-perceptions and boost self-confidence..</p>
                {/* You can add an image here */}
              </div>
            </div>
          </div>

          {/* Goal Setting and Tracking Card */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Self-Compassion Practices</h5>
                <p className="card-text"> Cultivating self-compassion involves treating oneself with kindness and understanding, which can counteract self-criticism and foster a more positive self-image.</p>
                {/* You can add an image here */}
              </div>
            </div>
          </div>

          {/* Stress Assessment Tools Card */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Gratitude Journaling</h5>
                <p className="card-text">Keeping a gratitude journal and regularly reflecting on positive aspects of oneself and one's life can promote self-acceptance and appreciation.</p>
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
            <h4>Positive Affirmations Information</h4>
            <p>Positive affirmations are statements designed to challenge and overcome negative self-beliefs. By repeating affirmations such as "I am worthy" or "I am capable," individuals can gradually rewire their thought patterns and build a more positive self-image. Affirmations serve as reminders of one's inherent worth and potential, helping to counteract the impact of self-doubt and criticism. Over time, consistent use of positive affirmations can lead to increased self-confidence, resilience, and a greater sense of self-worth.</p>
          </div>
        </div>

        {/* Second Additional Paragraph */}
        <div className="row">
          <div className="col">
          <h4>Self-Compassion Information</h4>
            <p>Self-compassion involves treating oneself with the same kindness, care, and understanding as one would offer to a friend in times of need. This practice acknowledges that imperfection and struggle are part of the human experience, fostering a sense of common humanity. By practicing self-compassion, individuals can soothe their inner critic, cultivate self-acceptance, and develop a more balanced perspective on their strengths and weaknesses. Research has shown that self-compassionate individuals are better able to cope with setbacks, experience less anxiety and depression, and have a more positive self-image overall.</p>
          </div>
        </div>

        {/* Third Additional Paragraph */}
        <div className="row">
          <div className="col">
          <h4>Gratitude journaling Information</h4>
            <p>Gratitude journaling involves regularly writing down things for which one is grateful, whether big or small. By focusing on the positive aspects of life, including personal qualities, achievements, and experiences, individuals can shift their attention away from perceived flaws and shortcomings. Gratitude journaling promotes self-reflection and self-appreciation, highlighting the abundance and richness of one's life. Over time, this practice can lead to a greater sense of self-worth, increased optimism, and a more positive outlook on oneself and the world.</p>
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


export default PositiveSelfImagePage;
