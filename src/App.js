import React from 'react';

function App() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <header className="container py-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <nav className="navbar navbar-light w-100 mb-4">
          <span className="navbar-brand mb-0 h1">SaaSify</span>
          <button className="btn btn-outline-primary">Sign In</button>
        </nav>
        <div className="text-center mt-5">
          <h1 className="display-3 fw-bold mb-3">Welcome to SaaSify</h1>
          <p className="lead mb-4">Launch your next big idea with our modern, scalable SaaS platform. Fast, reliable, and easy to use.</p>
          <a href="#features" className="btn btn-primary btn-lg px-5 shadow">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-primary" style={{fontSize: '2.5rem'}}>
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h5 className="card-title fw-bold">Blazing Fast</h5>
                <p className="card-text">Experience lightning-fast performance and instant scalability for your business needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-success" style={{fontSize: '2.5rem'}}>
                  <i className="bi bi-shield-lock"></i>
                </div>
                <h5 className="card-title fw-bold">Secure by Design</h5>
                <p className="card-text">Your data is protected with industry-leading security and privacy best practices.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3 text-info" style={{fontSize: '2.5rem'}}>
                  <i className="bi bi-gear"></i>
                </div>
                <h5 className="card-title fw-bold">Easy Integration</h5>
                <p className="card-text">Connect with your favorite tools and services in just a few clicks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-3 mt-auto text-center small text-muted">
        &copy; {new Date().getFullYear()} SaaSify. All rights reserved.
      </footer>
    </div>
  );
}

export default App; 