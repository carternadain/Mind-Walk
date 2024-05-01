import React from 'react';
// import { BiArrowClockwise, BiCamera, BiChat, BiCart } from 'react-icons/bi'; // Import Bootstrap icons
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import '/Users/carternadain/Desktop/Mind-Walk/mind-walk/src/pages/style.css';
import zenImage from '../images/zen.jpg';

const Home = () => {
 

  return (
    <div>
    {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-">
      {/* Mind Walk logo/text on the left */}
      <a className="mindwalk-text navbar-brand" href="#">
        Mind Walk
      </a>
  
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
            <a className="nav-link" href="#stress-relief">Stress Relief</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pressure-management">Pressure Management</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#positive-self-image">Positive Self-Image</a>
          </li>
        </ul>
  
        {/* Login and Get Started buttons on the right */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#get-started">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="hero-section">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side */}
      <div className="col-md-6 text-center">
        <h1>Discover Your Potential with Mind Walk</h1>
        <p>Mind Walk is your personal guide to conquering obstacles, nurturing your well-being, and unlocking your true potential. Embark on a transformative journey towards a happier and more fulfilling life.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>

      {/* Right Side */}
      <div className="col-md-6">
        <div className="blank-square">
        <img src={zenImage} alt="Zen" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</div>
  
    <div className="feature-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Unlock Your Potential with Mind Walk</h2>
            <p>Experience a transformative journey towards a happier and more fulfilling life.</p>
            <button className="btn btn-primary">Try Now</button>
          </div>
        </div>
      </div>
    </div>
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className="feature text-center py-5">
          <img src="path/to/stress_image.jpg" alt="Stress Relief"/>
          <h2>Stress Relief</h2>
          <p>Explore guided meditations and breathing exercises to find inner calm and reduce stress.</p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="feature text-center">
          <img src="path/to/pressure_image.jpg" alt="Pressure Management"/>
          <h2>Pressure Management</h2>
          <p>Learn techniques to manage external pressures and maintain balance in your daily life.</p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="feature text-center">
          <img src="path/to/self_image_image.jpg" alt="Positive Self-Image"/>
          <h2>Positive Self-Image</h2>
          <p>Build a positive self-image through affirmations, self-reflection, and personal growth.</p>
        </div>
      </SwiperSlide>
      
      {/* Add more SwiperSlides for additional content if needed */}
    </Swiper>
    </section>

    <div className="features-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">Key Features</h2>
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="col-md-4 mb-4 text-center">
        <h3>Stress Relief</h3>
        <p>Our app offers a variety of stress-relief techniques, including guided meditations, breathing exercises, and mindfulness practices. Take a moment to relax and unwind, no matter where you are.</p>
      </div>
      <div className="col-md-4 mb-4 text-center">
        <h3>Pressure Management</h3>
        <p>Manage your work and personal pressures with ease using our app's intuitive tools and resources. From time-management techniques to stress-busting strategies, we've got you covered.</p>
      </div>
      <div className="col-md-4 mb-4 text-center">
        <h3>Positive Self-Image</h3>
        <p>Cultivate a positive self-image and boost your self-confidence with our app's empowering features. Practice self-care, affirmations, and goal-setting to foster a healthier relationship with yourself.</p>
      </div>
    </div>
  </div>
</div>


  <div className="testimonials-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">What Our Users Say</h2>
    <div className="row">
      <div className="col-md-4 mt-4">
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p>Mind Walk has been an absolute game-changer for me. It's helped me manage my stress levels and stay focused on my goals. Highly recommend!</p>
            <p>- Emily Smith</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p>I never realized how much I needed Mind Walk until I started using it. It's like having a personal coach in my pocket, guiding me through life's challenges with ease.</p>
            <p>- John Doe</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p>Mind Walk has transformed my mindset and helped me cultivate a more positive outlook on life. I feel more confident and empowered than ever before. Thank you!</p>
            <p>- Sarah Johnson</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Footer Section */}
      <footer className="text-dark py-4 footer-custom">
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

export default Home;

