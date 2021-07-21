import logo from '../images/logo.png';
import master from '../images/master.png';
import visa from '../images/visa.png';
import us from '../images/us.png';
import discover from '../images/discover.jpg';
import paypal from '../images/paypal.png';

const Footer = () => {
  return (
    <section className='container'>
      <footer>
        <div className='first'>
          <img src={logo} className='img-fluid' alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            impedit quaerat reprehenderit in exercitationem nulla blanditiis
            voluptas ea eum minus.
          </p>
          <div>
            <i className='bi bi-youtube'></i>
            <i className='bi bi-facebook'></i>
            <i className='bi bi-instagram'></i>
            <i className='bi bi-twitter'></i>
            <i className='bi bi-linkedin'></i>
          </div>
          <p className='copyright'>
            &copy;2015-2021 Jusako. All Rights Reserved.
          </p>
        </div>

        <div className='second d-flex'>
          <div className='quick-links'>
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Products</li>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>

          <div className='custom-area'>
            <h3>Custom Area</h3>
            <ul>
              <li>My Account</li>
              <li>Orders</li>
              <li>Tracking List</li>
              <li>Term</li>
              <li>Privacy Policy</li>
              <li>My Cart</li>
            </ul>
          </div>
        </div>

        <div className='third'>
          <h3>Contact Info</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            neque reiciendis architecto eius ipsum vitae?
          </p>
          <div className='questions d-flex justify-content-around align-items-center'>
            <h5>
              Have Questions? <br />
              +123 456 789
            </h5>
            <button className='btn btn-primary'>Live Chat</button>
          </div>
          <div className='store d-flex justify-content-around'>
            <button className='btn btn-primary'>
              Download on the App Store
            </button>
            <button className='btn btn-primary'>Get It on Google Play</button>
          </div>

          <div className='cards'>
            <img src={master} className='img-fluid' alt='' />
            <img src={visa} className='img-fluid' alt='' />
            <img src={us} className='img-fluid' alt='' />
            <img src={discover} className='img-fluid' alt='' />
            <img src={paypal} className='img-fluid' alt='' />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
