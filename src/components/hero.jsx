import games from '../images/games1.png';

const startBuying = () => {
  alert('Start Buying Our Products');
};

const Hero = () => {
  return (
    <div className='container'>
      <div className='hero'>
        <div className='row'>
          <div className='col-md-3'>
            <ul className='list-group fw-bold'>
              <li className='list-group-item active'>Brake Parts</li>
              <li className='list-group-item'>Wheels & Tires</li>
              <li className='list-group-item'>Furniture & Dectors</li>
              <li className='list-group-item'>Turbo System</li>
              <li className='list-group-item'>Lighting</li>
              <li className='list-group-item'>Accessories</li>
              <li className='list-group-item'>Body Parts</li>
              <li className='list-group-item'>Performance Filters</li>
              <li className='list-group-item'>Engine Parts</li>
            </ul>
          </div>

          <div className='col-md-9'>
            <div className='clothing'>
              <div className='row'>
                <div className='col-md-6'>
                  <h5>Clothing</h5>
                  <h2>
                    UP TO 20% OFF <br />
                    SPEAKERS
                  </h2>
                  <p>The Best Gadgets Collection 2021</p>
                  <div className='price'>
                    <span>$430</span>
                    <p>$350</p>
                  </div>
                  <button onClick={startBuying} className='btn btn-primary'>
                    Start Buying
                  </button>
                </div>

                <div className='col-md-6 games'>
                  <img src={games} className='img-fluid' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
