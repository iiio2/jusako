const TopMost = () => {
  return (
    <div className='top-most'>
      <div className='container'>
        <div className='top-most-items'>
          <div className='lang-currency'>
            <div className='dropdown language'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='flag flag-us'></i>English
              </button>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    English
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Russian
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Chinese
                  </a>
                </li>
              </ul>
            </div>

            <div className='vl'></div>
            <div className='dropdown currency'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='flag flag-us'></i>Currency USD:
              </button>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    USD
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Pound
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Taka
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='call-us'>
            <p>
              Call us toll free: <strong>+1888 234 5678</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMost;
