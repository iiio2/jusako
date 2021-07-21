import logo from '../images/logo.png';

const TopBody = () => {
  return (
    <section className='container'>
      <div className='top-body'>
        <div className='logo'>
          <img src={logo} className='img-fluid' alt='logo' />
        </div>

        <div className='categories'>
          <form>
            <div className='form-group d-flex'>
              <input
                type='text'
                className='form-control'
                placeholder='Search Products...'
              />
              <i className='bi bi-search'></i>
            </div>
          </form>
        </div>
        <div className='cart'>
          <i className='bi bi-cart4'></i>
          <span>
            {' '}
            <strong style={{ fontSize: '1rem' }}>$909.00</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TopBody;
