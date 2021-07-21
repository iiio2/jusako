const Navbar = () => {
  return (
    <section className='navigation'>
      <div className='nav-body'>
        <div className='d-none d-sm-block nav-body-heading container'>
          <h4>Browse Categories</h4>
          <span>
            <i className='bi bi-bar-chart-steps'></i>
          </span>
        </div>
      </div>

      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Blog
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Shop
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Car & Electronics
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Lighting
                    </a>
                  </li>

                  <li>
                    <a className='dropdown-item' href='#'>
                      Engine Parts
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Pages
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>
            <div className='icons d-flex'>
              <i className='bi bi-lightbulb'></i>
              <i className='bi bi-circle'></i>
              <i className='bi bi-person'></i>
              <i className='bi bi-heart'></i>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
