import React from 'react';
// import { BiArrowClockwise, BiCamera, BiChat, BiCart } from 'react-icons/bi'; // Import Bootstrap icons
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import '/Users/user/Desktop//projects/Mind-Walk/mind-walk/src/pages/style.css';
import image1 from '../images/mindwalkheader.png';

const Home = () => {
 

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
            <li>
              <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <div className="input-group-append">
                    {/* <button className="btn btn-outline-success" type="submit">
                      <BiSearch /> {/* Using Bootstrap icon */}
                    {/* </button> */}
                  </div>
                </div>
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta">Register</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
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

      {/* Header Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
          <p className="header-text">A place to clear your head</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className="feature text-center">
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

    <div className="container mt-5 head">
        <div className="row">
          <div className="col-12">
            <img className='mind' src={image1} alt="Stress Relief"/>
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
              {/* Adjust the links and images accordingly */}
              {/* <a href="#" className="text-dark mx-2"><BiArrowClockwise /></a>
              <a href="#" className="text-dark mx-2"><BiCamera /></a>
              <a href="#" className="text-dark mx-2"><BiChat /></a>
              <a href="#" className="text-dark mx-2"><BiCart /></a> */}
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

