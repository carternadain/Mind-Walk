import React from 'react';

const GetStarted = () => {
  return (
    <div className="container mt-5">
      {/* Selling Section */}
      <div className="text-center mb-5">
        <h2>Welcome to Mind Walk!</h2>
        <p>Embark on a journey of self-discovery and personal growth with our platform. Sign up today and start your transformation.</p>
      </div>

      {/* Sign Up Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center mb-4">Sign Up</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;