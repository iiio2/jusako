import laptop2 from '../images/laptop2.jpg';
import tablets from '../images/tablets.jpg';
import tv from '../images/tv.jpg';
import laptop from '../images/laptop.jpg';
import accessories from '../images/accessories.jpg';

const RecentView = () => {
  return (
    <section className='container recent'>
      <div className='grid-1x3'>
        <div className='recent-body'>
          <img src={laptop2} className='img-fluid' alt='' />
          <div className='recent-content'>
            <h3>Electronics</h3>
            <ul>
              <li>Computers</li>
              <li>Laptop</li>
              <li>Macbook</li>
              <li>Accessories</li>
              <li>More...</li>
            </ul>
          </div>
        </div>

        <div className='recent-body'>
          <img src={tablets} className='img-fluid' alt='' />
          <div className='recent-content'>
            <h3>Tablets & Mobiles</h3>
            <ul>
              <li>Computers</li>
              <li>Laptop</li>
              <li>Macbook</li>
              <li>Accessories</li>
              <li>More...</li>
            </ul>
          </div>
        </div>

        <div className='recent-body'>
          <img src={tv} className='img-fluid' alt='' />
          <div className='recent-content'>
            <h3>TV & Audio</h3>
            <ul>
              <li>Computers</li>
              <li>Laptop</li>
              <li>Macbook</li>
              <li>Accessories</li>
              <li>More...</li>
            </ul>
          </div>
        </div>

        <div className='recent-body'>
          <img src={laptop} className='img-fluid' alt='' />
          <div className='recent-content'>
            <h3>PC & Laptop</h3>
            <ul>
              <li>Computers</li>
              <li>Laptop</li>
              <li>Macbook</li>
              <li>Accessories</li>
              <li>More...</li>
            </ul>
          </div>
        </div>

        <div className='recent-body'>
          <img src={accessories} className='img-fluid' alt='' />
          <div className='recent-content'>
            <h3>Accessories</h3>
            <ul>
              <li>Computers</li>
              <li>Laptop</li>
              <li>Macbook</li>
              <li>Accessories</li>
              <li>More...</li>
            </ul>
          </div>
        </div>

        <div className='recent-body'>
          <img src={laptop2} className='img-fluid' alt='' />
          <div className='recent-content'>
            <h3>Games & Consoles</h3>
            <ul>
              <li>Computers</li>
              <li>Laptop</li>
              <li>Macbook</li>
              <li>Accessories</li>
              <li>More...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentView;
