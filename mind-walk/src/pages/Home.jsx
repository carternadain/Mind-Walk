import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MediaCard } from "../components/MediaCard";
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'
import clouds2 from '../images/clouds2.jpg';
import cloudsImage from '../images/clouds.jpg';
import highsky from '../images/highsky.jpg';
import palmtree from '../images/palmtree.jpg';
import peaceImage from '../images/peace.jpg';
import rainbowImage from '../images/rainbow.jpg';

const MEDIA_CARDS = {
  STRESS: {
    alt: "peace",
    title: "Stress Relief",
    image: peaceImage,
    text: "Our app offers a variety of stress-relief techniques, including guided meditations, breathing exercises, and mindfulness practices. Take a moment to relax and unwind, no matter where you are.",
  },
  PRESSURE: {
    alt: "rainbow",
    title: "Pressure Management",
    image: rainbowImage,
    text: "Manage your work and personal pressures with ease using our app's intuitive tools and resources. From time-management techniques to stress-busting strategies, we've got you covered.",
  },
  SELF_IMAGE: {
    alt: "clouds",
    title: "Positive Self-Image",
    image: cloudsImage,
    text: "Cultivate a positive self-image and boost your self-confidence with our app's empowering features. Practice self-care, affirmations, and goal-setting to foster a healthier relationship with yourself.",
  },
}

const Home = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

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

          {/* Login, Get Started or Logout button on the right */}
          <ul className="navbar-nav ml-auto">
            {token ? (
              <li className="nav-item">
                <button className="nav-link btn" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/get-started">Get Started</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>


      <div className="hero-section bg-image">
        <div className="container">
          <div className="text-center">
            <h1 className="hero-section--header">Discover Your Potential with Mind Walk</h1>
            <p>
              <span className="hero-section--text">Mind Walk is your personal guide to conquering obstacles, nurturing your well-being, and unlocking your true potential.</span>
              <span className="hero-section--text">Embark on a transformative journey towards a happier and more fulfilling life.</span>
            </p>
            <button className="btn btn-dark">Get Started</button>
          </div>
        </div>
      </div>


      <div className="feature-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Unlock a better you with Mind Walk</h2>
              <p> Discover essential self-help tips for managing stress, handling pressure, and improving self-image to enhance your well-being.</p>
              <button className="btn btn-dark">Try Now</button>
            </div>
          </div>
        </div>
      </div>

      <section>
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide>
      <div className="feature card">
        <img src={palmtree} alt="tree" />
        <Link to="/stress-relief">
          <div className="text-overlay">
            <h2>Stress Relief</h2>
            <p>Explore guided meditations and breathing exercises to find inner calm and reduce stress.</p>
          </div>
        </Link>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="feature card">
        <img src={highsky} alt="sky" />
        <Link to="/pressure-management">
        <div className="text-overlay">
          <h2>Pressure Management</h2>
          <p>Learn techniques to manage external pressures and maintain balance in your daily life.</p>
        </div>
        </Link>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="feature card">
        <img src={clouds2} alt="clouds" />
        <Link to="/positive-self-image">
          <div className="text-overlay">
            <h2>Positive Self-Image</h2>
            <p>Build a positive self-image through affirmations, self-reflection, and personal growth.</p>
          </div>
        </Link>
      </div>
    </SwiperSlide>

    {/* Add more SwiperSlides for additional content if needed */}
  </Swiper>
</section>

    <div className="features-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-decoration-underline">Key Features</h2>
         <p className="text-center pb-4 testimonial-box">
          Our self-help application is designed to guide you on a journey towards better mental and emotional well-being. By offering practical tips and techniques to manage stress, handle pressure, and build a positive self-image, our app empowers you to take control of your life. Whether you're looking to reduce anxiety, enhance your resilience, or foster a healthier self-perception, our tailored resources and guided exercises provide the support you need. Experience the transformative benefits of self-improvement and unlock a happier, more fulfilling life with our app.
         </p>
          <MediaCard data={MEDIA_CARDS.STRESS} />
          <MediaCard data={MEDIA_CARDS.PRESSURE} isReverseOrder={true}/>
          <MediaCard data={MEDIA_CARDS.SELF_IMAGE} />
      </div>
    </div>
    <div className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row">
            {[
              {
                name: "Emily Johnson",
                content: "Mind Walk has completely changed how I approach my day-to-day life. With its help, I manage my stress and stay focused on my goals. Highly recommend!",
                photo: "path_to_emily_photo.jpg",
                title: "Marketing Specialist",
                rating: 5
              },
              {
                name: "John Camp",
                content: "Using Mind Walk has been a revelation. It feels like having a personal coach guiding me through life’s challenges, making everything easier to handle.",
                photo: "path_to_john_photo.jpg",
                title: "Software Engineer",
                rating: 5
              },
              {
                name: "Sarah Nadain",
                content: "Mind Walk has transformed my mindset and given me a positive outlook on life. I now feel more confident and empowered. Thank you, Mind Walk!",
                photo: "path_to_sarah_photo.jpg",
                title: "Freelance Writer",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div className="col-md-4 mt-4" key={index}>
                <div className="testimonial-box p-3" style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                  <div className="testimonial-photo text-center mb-3">
                    <img src={testimonial.photo} alt={testimonial.name} className="rounded-circle" width="80" height="80" />
                  </div>
                  <div className="testimonial-content">
                    <p className="font-italic">"{testimonial.content}"</p>
                    <p className="font-weight-bold mb-0">- {testimonial.name}</p>
                    <p className="text-muted mb-1">{testimonial.title}</p>
                    <div className="testimonial-rating">
                      {"★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog/Articles Section */}
      <div className="blog-articles-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Blog/Articles</h2>
          <p className="text-center mb-4">
            Discover insightful articles and blog posts about mental wellness, mindfulness, and stress management.
          </p>
          <div className="row">
            {[
              {
                title: "The Power of Mindfulness Meditation",
                excerpt: "Learn how mindfulness meditation can help you manage stress and improve your overall well-being.",
                link: "/blog/mindfulness-meditation"
              },
              {
                title: "10 Tips for Effective Stress Management",
                excerpt: "Explore practical tips and techniques for managing stress in your daily life.",
                link: "/blog/stress-management-tips"
              },
              {
                title: "How to Cultivate a Positive Mindset",
                excerpt: "Discover strategies to develop and maintain a positive mindset for better mental health.",
                link: "/blog/positive-mindset"
              },
              {
                title: "Healthy Eating for Mental Wellness",
                excerpt: "Understand the connection between diet and mental health, and get tips on eating well.",
                link: "/blog/healthy-eating-mental-wellness"
              }
            ].map((article, index) => (
              <div className="col-md-6 mt-4" key={index}>
                <div className="article-box p-3" style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
                  <h5>{article.title}</h5>
                  <p>{article.excerpt}</p>
                  <a href={article.link} className="btn btn-dark">Read More</a>
                </div>
              </div>
            ))}
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

export default Home;